/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import { TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useRef, useState } from 'react';

interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    name: string;
    onChange: (e: TCustomeEventOnChange<string>) => void;
    options: TOption[];
}

const InputSelect = (props: TProps) => {
    const { options, ...attrs } = props;
    const ref = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isOpen, setIsOpen] = useState(false)

    const handleOnClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
        e?.stopPropagation()
        attrs?.onChange({
            target: {
                name: attrs?.name,
                value: data?.value
            }
        })
        setIsOpen(false)
    }
    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>
            {...attrs}
            isClerable
            childrenOverlay={<div ref={ref} className={clsx({
                "absolute left-0  z-10 mt-[4.5rem]  transition-all overflow-hidden origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                " h-auto shadow-lg w-full": isOpen,
                " h-0 shadow-none": !isOpen
            })}

            >
                {
                    isOpen && <div className="py-0">
                        {
                            options?.map((option, i) => {
                                const isSelected = option?.value === attrs?.value
                                return <div key={i} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClickOption(e, option)} className={clsx({
                                    "hover:bg-gray-100 block px-4 py-2 cursor-pointer": true,
                                    "!bg-gray-100": isSelected
                                })} >{option?.label}</div>
                            })
                        }
                    </div>
                }

            </div>}
        >

            {
                (attrsInput) => <input
                    {...attrsInput}
                    onFocus={() => {
                        setIsOpen(true)
                    }}
                    onBlur={() => { setTimeout(() => { setIsOpen(false) }, 100) }}
                    id={attrsInput?.name}
                    placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                    ref={inputRef}
                />


            }

        </ContainerInput>
    );
}


export default InputSelect