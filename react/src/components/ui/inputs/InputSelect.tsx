/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconChevronDown } from '@assets/icons';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import { spreadArrayAttemp } from '@lib/utils/helper';
import { TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useRef, useState } from 'react';
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
    const ref = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setIsSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
        e?.stopPropagation()
        let valueUpdates: string[] | string = data?.value

        if (isMultiple && Array.isArray(attrs?.value)) {
            const isSelected = attrs?.value?.some(singleValue => singleValue === data?.value)
            valueUpdates = (isSelected ? attrs?.value : spreadArrayAttemp({ newValue: valueUpdates, array: attrs?.value }) as string[])
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
                ciV1: "",
            }}
            childrenOverlay={<div ref={ref} className={clsx({
                "absolute left-0  z-10 mt-[4.5rem]  transition-all overflow-hidden origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                " h-auto shadow-lg w-full": isOpen,
                " h-0 shadow-none": !isOpen
            })}

            >
                {
                    isOpen &&<>
                        {
                            // @ts-ignore
                            isMultiple ?  <InputCheckbox options={filteredOptions} {...attrs} classNameContainerOption={"!px-4 !py-4 !max-h-[10rem] !overflow-y-scroll"} label={""}/>: <div className="py-0 overflow-y-auto max-h-[10rem]">
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
                (attrsInput) => <div className={clsx({
                    'flex gap-2 ':true,
                })}>
                    {
                        isMultiple? <div onClick={()=>{
                            setIsOpen(true)
                        }} className='cursor-pointer h-full w-full border'>
                            <span className='opacity-0'>Siska</span>
                               
                        </div>:<input
                        {...attrsInput}
                        onFocus={() => setIsOpen(true)}
                        onClick={()=>setIsOpen(true)}
                        onBlur={()=>{
                            setTimeout(()=>{
                                setIsOpen(false)
                            },100)
                        }}
                        id={attrsInput?.name}
                        onChange={(e) => {
                            setIsSearch(true)
                            handleSearchChange(e);
                        }}
                        value={isSearch || isMultiple ? searchQuery : attrs?.value}
                        placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                        ref={inputRef}
                    />
                    }
                </div>


            }

        </ContainerInput>
    );
}


export default InputSelect