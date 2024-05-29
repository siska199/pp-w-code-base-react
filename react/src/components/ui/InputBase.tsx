/* eslint-disable react/jsx-handler-names */
import Container from "@components/ui/Container";
import ErrorMessage from "@components/ui/ErrorMessage";
import clsx from "clsx";
import React, { useRef, useState } from 'react';

interface TProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;  
    label?: string;
    customeElementStart?: React.ReactNode;
    customeElementEnd?: React.ReactNode;
    isRounded?: boolean;
    isFloatingLabel?: boolean;
    labelClass?:string;
}

const InputBase = (props: TProps) => {
    const { name, label, customeElementStart,labelClass, placeholder, isRounded, isFloatingLabel, customeElementEnd, type, disabled, errorMessage, ...attrs } = props;
    const [dynamicType] = useState(type);
    const refElmnStart = useRef<HTMLDivElement>(null);


    return (
        <Container gap={"tiny"}>
            <section className="flex flex-col gap-1 w-full relative">
                {label && !isFloatingLabel && (
                    <label htmlFor={name} className="font-medium">{label}</label>
                )}
                <div className={clsx(
                    "bg-white flex flex-nowrap items-center gap-2 text-body-base border border-input rounded-lg focus-within:ring-4 focus-within:ring-primary-200 focus-within:!border-primary w-full px-3 py-2",
                    {
                        "bg-disabled": disabled,
                        "border-error focus-within:!ring-error-200 focus-within:!border-error": errorMessage,
                        "!rounded-full": isRounded
                    }
                )}>
                    {customeElementStart && <div ref={refElmnStart} id={String(Date.now()+name)}>{customeElementStart}</div>}
                    <div className="w-full relative">
                        <input
                            id={name}
                            {...attrs}
                            className="peer w-full flex-grow !outline-none !border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-400"
                            type={dynamicType}
                            disabled={disabled}
                            placeholder={isFloatingLabel ? "" : placeholder}
                            
                        />
                        {label && isFloatingLabel && (
                            <label
                                id="floating-label"
                                htmlFor={name}
                                className={clsx(
                                    {
                                        "font-medium peer-focus:ml-[-0.25rem] absolute left-0 text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:bg-white peer-focus:px-1 z-10":true,
                                        [labelClass||"peer-focus:!ml-[-30px]"]:customeElementStart
                                    }
                                )}
                            >
                                {label}
                            </label>
                        )}
                    </div>
                    {customeElementEnd && customeElementEnd}
                </div>
            </section>
            <ErrorMessage message={errorMessage} />
        </Container>
    );
}

export default InputBase;
