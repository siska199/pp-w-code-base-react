/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from 'react';

interface TProps extends  TBasePropsInput, React.HTMLProps<HTMLInputElement> {
    name            : string;
    onChange        : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = (props: TProps) => {
    const {...attrs } = props;
    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>> customeClass={{
            ...attrs?.customeClass,
            ciV2:`${attrs?.customeClass?.ciV2} ${attrs?.variant==="v3"&&' !rounded-[1.75rem]'}`
        }} {...attrs} >
            {
                (attrsInput)=><input {...attrsInput} id={attrsInput?.name} placeholder={attrs?.variant==="v2"?"": attrsInput?.placeholder||""}/>
            }
        </ContainerInput>

    );
    
}
{/* <input
id={name}
{...attrs}
className={clsx({
    "peer w-full flex-grow !outline-none !border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-400": true,
    "!bg-disabled": disabled
})}
type={dynamicType}
disabled={disabled}
placeholder={variant === "v2" ? "" : placeholder}

/> */}


export default InputBase;
