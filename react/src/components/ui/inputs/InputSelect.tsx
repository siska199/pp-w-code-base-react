/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconClose } from '@assets/icons';
import IconChevronToggle from '@assets/icons/IconChevronToggle';
import Badge from '@components/ui/Badge';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { getFieldLabelFromOptions, isolateEvent, spreadArrayAttemp } from '@lib/utils/helper';
import { TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import InputCheckbox from './InputCheckbox';

type TProps = {
    name: string;
    onChange: (e: TCustomeEventOnChange<string | string[]>) => void;
    options: TOption[];

} & (SingleSelectProps | MultipleSelectProps);

interface SingleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    isMultiple?: false;
    value: string;
}

interface MultipleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    isMultiple: true;
    value: string[];
}

const InputSelect = (props: TProps) => {
    const { options, isMultiple, ...attrs } = props;
    const refContainerDropdown = useRef<HTMLDivElement | null>(null);
    const refContainerValue = useRef<HTMLDivElement | null>(null);
    const refIconChevron = useRef<HTMLDivElement | null>(null);
    const refInput = useRef<HTMLInputElement | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setIsSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useOnClickOutside<HTMLDivElement>({ ref: refContainerDropdown, refExceptions: [refIconChevron, refInput, refContainerValue], handler: () => setIsOpen(false) });

    useEffect(() => {
        if (refInput?.current && isMultiple) {
            refInput.current.style.width = `${searchQuery?.length * 10 || 10}px`;
        }
    }, [searchQuery, isMultiple])

    const handleOnClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
        e?.stopPropagation()
        let valueUpdates: string[] | string = data?.value

        if (isMultiple && Array.isArray(attrs?.value)) {
            const isSelected = attrs?.value?.some(singleValue => singleValue === data?.value)
            valueUpdates = (isSelected ? attrs?.value?.filter((data) => data !== valueUpdates) : spreadArrayAttemp({ newValue: valueUpdates, array: attrs?.value }) as string[])
        }
        attrs?.onChange({
            target: {
                name: attrs?.name,
                value: valueUpdates
            }
        })
        setIsOpen(false)
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

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>
            {...attrs}
            isClerable
            onCustomeClearHandler={handleOnClearValue}
            customeClearValue={isMultiple ? searchQuery : String(attrs?.value) || searchQuery}
            customeElement={{
                ...attrs?.customeElement,
                end: <span ref={refIconChevron} onClick={(e) => {
                    isolateEvent(e)
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
                input: "min-w-0"

            }}
            childrenOverlay={<div ref={refContainerDropdown} className={clsx({
                "absolute  z-10 mt-2 origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                " h-auto shadow-lg w-full": isOpen,
                " h-0 shadow-none": !isOpen
            })}

            >
                {
                    isOpen && <>
                        {
                            // @ts-ignore
                            isMultiple ? <InputCheckbox
                                options={filteredOptions}
                                {...attrs}
                                classNameContainerOption={"!px-4 !py-4 !max-h-[10rem] !overflow-y-scroll"}
                                label={""}
                                onChange={(e) => {
                                    attrs?.onChange(e)
                                    setSearchQuery('')
                                }}
                            /> : <div className="py-0 overflow-y-auto max-h-[10rem]">
                                {
                                    filteredOptions?.map((option, i) => {
                                        const isSelected = option?.value === attrs?.value
                                        return <div
                                            key={i}
                                            onMouseDown={(e) => e.preventDefault()}
                                            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClickOption(e, option)}
                                            className={clsx({
                                                "hover:bg-gray-100 block px-4 py-2 cursor-pointer ": true,
                                                "!bg-primary !text-white": isSelected,
                                                "!bg-gray-100": isSearch && i === 0 && searchQuery
                                            })} >
                                            {option?.label}
                                        </div>
                                    })
                                }
                            </div>
                        }
                    </>
                }

            </div>}
        >

            {
                (attrsInput) => <div
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
                                return <Badge key={i} label={labelValue}
                                    customeElement={
                                        <div onClick={(e) => handleOnClickOption(e, { label: labelValue, value: data })}>
                                            <IconClose className='w-[0.75rem] icon-primary icon-primary-fill' />
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
                                setIsSearch(true)
                                handleSearchChange(e);
                                setIsOpen(true)
                            }}
                            value={isSearch || isMultiple ? searchQuery : getFieldLabelFromOptions({ array: options, value: attrs?.value })}
                            placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                            ref={refInput}
                        />
                    </div>
                </div>


            }

        </ContainerInput>
    );
}


export default InputSelect