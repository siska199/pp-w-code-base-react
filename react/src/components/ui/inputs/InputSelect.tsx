/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconClose } from '@assets/icons';
import IconChevronToggle from '@assets/icons/IconChevronToggle';
import Badge from '@components/ui/Badge';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { debounce, getFieldLabelFromOptions, isEmptyValue, spreadArrayAttemp } from '@lib/utils/helper';
import { TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import InputMultipleCheckbox from './InputMultipleCheckbox';

type TProps = {
    name: string;
    onChange: (e: TCustomeEventOnChange<string | string[]>) => void;
    options: TOption[];
    onLoadMore?: (args?: any[]) => void
} & (SingleSelectProps | MultipleSelectProps);

interface SingleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    isMultiple?: false;
    value: string;
    withSelectAll?: false
}

interface MultipleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    isMultiple: true;
    value: string[];
    withSelectAll?: boolean;
}

const InputSelect = (props: TProps) => {
    const { options, isMultiple, withSelectAll, onLoadMore, ...attrs } = props;

    const refContainerDropdown = useRef<HTMLDivElement | null>(null);
    const refContainerValue = useRef<HTMLDivElement | null>(null);
    const refIconChevron = useRef<HTMLDivElement | null>(null);
    const refInput = useRef<HTMLInputElement | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setIsSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useOnClickOutside<HTMLDivElement>({
        ref: refContainerDropdown, refExceptions: [refIconChevron, refInput, refContainerValue], handler: () => {
            setIsOpen(false)
        }
    });

    useEffect(() => {
        if (!isMultiple) {
            const labelOfValue = getFieldLabelFromOptions({ array: options, value: attrs?.value })
            setSearchQuery(labelOfValue || '')
        }
    }, [attrs.value])

    useEffect(() => {
        if (refInput?.current && isMultiple) {
            refInput.current.style.width = `${searchQuery?.length * 10 || 10}px`;
        }
    }, [searchQuery, isMultiple])

    useEffect(() => {
        if (searchQuery && onLoadMore) {
            debouncedLoadMoreOptions();
        }
    }, [searchQuery])

    const handleOnClickOption = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
        e?.stopPropagation()
        let valueUpdates: string[] | string = data?.value

        if (isMultiple && Array.isArray(attrs?.value)) {
            const isSelected = attrs?.value?.some(singleValue => singleValue === data?.value)
            valueUpdates = (isSelected ? attrs?.value?.filter((data) => data !== valueUpdates) : spreadArrayAttemp({ newValue: valueUpdates, array: attrs?.value }) as string[])
        } else {
            setIsOpen(false)
        }
        attrs?.onChange({
            target: {
                name: attrs?.name,
                value: valueUpdates
            }
        })
        setSearchQuery('');
        setIsSearch(false)
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleOnClearValue = () => {
        if (isMultiple) {
            setSearchQuery('');
        } else {
            attrs?.onChange({
                target: {
                    name: attrs?.name,
                    value: ""
                }
            })
            setSearchQuery('');
        }

    }

    const handleOnScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (bottom && onLoadMore) {
            onLoadMore()
        }
    }

    // @ts-ignore
    const debouncedLoadMoreOptions = useRef(debounce(onLoadMore, 1000)).current;
    const filteredOptions = options?.filter(option => String(option?.label)?.toLowerCase().includes(searchQuery?.toLowerCase()))

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>
            {...attrs}
            isClerable
            onCustomeClearHandler={handleOnClearValue}
            customeClearValue={isMultiple ? searchQuery : String(attrs?.value) || searchQuery}
            customeElement={{
                ...attrs?.customeElement,
                end: <span
                    className={`${(isEmptyValue(attrs?.value) && attrs?.variant === "v6") && '-mt-1'}`}
                    ref={refIconChevron} onClick={(e) => {
                        e?.preventDefault();
                        e?.stopPropagation()
                        const updateIsOpen = !isOpen
                        if (updateIsOpen) {
                            refInput?.current?.focus()
                        }
                        setIsOpen(updateIsOpen)
                    }}>
                    <IconChevronToggle isOpen={isOpen} />
                </span>
            }}
            customeClass={{
                ...attrs?.customeClass,
                ciV1: "",
                ciV2: " flex-no-wrap max-w-full",
                input: "min-w-0",
                ciV4: '!inline-block ',
                label: `${(isEmptyValue(attrs?.value) && attrs?.variant === "v6" && !isOpen) ? 'scale-100 -translate-y-1 ' : ''} `
            }}
            childrenOverlay={(
                <div
                    ref={refContainerDropdown}
                    className={clsx({
                        "absolute  z-10 mt-2 origin-bottom-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                        " h-auto shadow-lg w-full": isOpen,
                        " h-0 shadow-none": !isOpen
                    })}
                >
                    {isMultiple && isOpen && (
                        // @ts-ignore
                        <InputMultipleCheckbox
                            options={filteredOptions}
                            {...attrs}
                            onScroll={handleOnScroll}
                            customeClassMulCheckbox={{
                                containerOption: '!px-0 !py-1 !max-h-[10rem] !flex-nowrap !overflow-y-scroll',
                                containerCheckbox: '!px-4 !py-1'
                            }}
                            label={""}
                            onChange={(e) => {
                                attrs?.onChange(e)
                                setSearchQuery('')
                            }}
                            withSelectAll={withSelectAll || false}
                        />
                    )}
                    {!isMultiple && isOpen && (
                        <div onScroll={handleOnScroll} className="py-0 overflow-y-auto max-h-[10rem]">
                            {
                                filteredOptions?.map((option, i) => {
                                    const isSelected = option?.value === attrs?.value
                                    return <div
                                        key={i}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClickOption(e, option)}
                                        className={clsx({
                                            "hover:bg-gray-100 block px-4 py-2 cursor-pointer ": true,
                                            "!bg-primary-50 text-primary-700 ": isSelected,
                                            "!bg-gray-100": (isSearch && i === 0 && searchQuery),

                                        })} >
                                        {option?.label}
                                    </div>
                                })
                            }
                        </div>
                    )}
                </div>
            )}
        >

            {
                (attrsInput) => (
                    <div
                        ref={refContainerValue}
                        className={clsx({
                            'flex shrink gap-2 flex-wrap  overflow-x-auto  scrollbar-hidden': true,
                        })}
                        onClick={() => {
                            if (isMultiple) {
                                const updateIsOpen = !isOpen
                                if (updateIsOpen) {
                                    refInput?.current?.focus()
                                }
                                setIsOpen(updateIsOpen)
                            }
                        }}
                    >

                        <div className=' w-full cursor-pointer flex flex-wrap gap-1 h-full '>
                            {
                                isMultiple && (attrs?.value as string[])?.map((data, i: number) => {
                                    const labelValue = getFieldLabelFromOptions({ array: options, value: data })
                                    return <Badge key={i} label={<div className='flex gap-1 items-center'>
                                        {labelValue}
                                        <div onClick={(e) => handleOnClickOption(e, { label: labelValue, value: data })} >
                                            <IconClose className='icon-primary icon-primary-fill' />
                                        </div>
                                    </div>}
                                    />
                                })
                            }
                            <input
                                {...attrsInput}
                                onFocus={() => {
                                    setIsOpen(true)
                                }}
                                id={attrsInput?.name}
                                onChange={(e) => {
                                    e?.stopPropagation()
                                    setIsSearch(true)
                                    handleSearchChange(e);
                                    setIsOpen(true)
                                }}
                                value={searchQuery}
                                placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                                ref={refInput}
                                // onKeyDown={handleKeyDown}
                                autoComplete={"off"}
                            />
                        </div>
                    </div>
                )
            }

        </ContainerInput>
    );
}


export default InputSelect