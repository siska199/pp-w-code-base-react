/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconChevronDown } from '@assets/icons';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import { spreadArrayAttemp } from '@lib/utils/helper';
import { TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useRef, useState } from 'react';

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
    const ref = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setisSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
        e?.stopPropagation()
        let valueUpdates: string[] | string = data?.value

        console.log(attrs?.value)
        if (isMultiple && Array.isArray(attrs?.value)) {
            const isSelected = attrs?.value?.some(singleValue => singleValue === data?.value)
            console.log("select", isSelected)
            valueUpdates = (isSelected ? valueUpdates : spreadArrayAttemp({ newValue: valueUpdates, array: attrs?.value }) as string[])
            console.log("current value",valueUpdates)
        }

        attrs?.onChange({
            target: {
                name: attrs?.name,
                value: valueUpdates
            }
        })
        setIsOpen(false)
        setSearchQuery('');
        setisSearch(false)
    }


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>
            {...attrs}
            isClerable
            customeElement={{
                ...attrs?.customeElement,
                end: <IconChevronDown onClick={() => {
                    const isOpenUpdate = !isOpen
                    setIsOpen(isOpenUpdate)
                    if (isOpenUpdate) {
                        inputRef?.current?.focus()
                    }
                }}
                    className='cursor-pointer' />
            }}
            customeClass={{
                ...attrs?.customeClass,
                ciV2: " ",
                ciV1: "border",
                input:"w-auto"
            }}
            childrenOverlay={<div ref={ref} className={clsx({
                "absolute left-0  z-10 mt-[4.5rem]  transition-all overflow-hidden origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                " h-auto shadow-lg w-full": isOpen,
                " h-0 shadow-none": !isOpen
            })}

            >
                {
                    isOpen && <div className="py-0">
                        {
                            filteredOptions?.map((option, i) => {
                                const isSelected = option?.value === attrs?.value
                                return <div key={i} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClickOption(e, option)} className={clsx({
                                    "hover:bg-gray-100 block px-4 py-2 cursor-pointer": true,
                                    "!bg-primary !text-white": isSelected,
                                    "!bg-gray-100": isSearch && i === 0 && searchQuery
                                })} >{option?.label}</div>
                            })
                        }
                    </div>
                }

            </div>}
        >

            {
                (attrsInput) => <div className='flex flex-grow flex-wrap'>
                    <div className='border w-auto'>
                        {
                            isMultiple && Array.isArray(attrs?.value) ? <div className='flex gap-1'>
                                {
                                    attrs?.value?.map((data, i) => <div key={i}>{data},</div>)
                                }
                            </div> : null
                        }
                    </div>
                    <input
                        {...attrsInput}
                        onFocus={() => {
                            setIsOpen(true)
                        }}
                        onBlur={() => { setTimeout(() => { setIsOpen(false) }, 100) }}
                        id={attrsInput?.name}
                        onChange={(e) => {
                            setisSearch(true)
                            handleSearchChange(e);
                        }}
                        value={isSearch || isMultiple ? searchQuery : attrs?.value}
                        placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                        ref={inputRef}

                    />
                </div>


            }

        </ContainerInput>
    );
}


export default InputSelect