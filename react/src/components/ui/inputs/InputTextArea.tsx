import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from 'react';

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLTextAreaElement> {
    name                    : string;
    onChange?               : (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextArea = (props: TProps) => {
    const {...attrs } = props;
    return (
        <ContainerInput<React.HTMLProps<HTMLTextAreaElement>> customeClass={{
            ...attrs?.customeClass,
            ciV2:`${attrs?.customeClass?.ciV2} ${attrs?.variant==="v3"&&' !rounded-[1.75rem]'}`
        }} {...attrs} >
            {
                (attrsInput)=><textarea {...attrsInput} placeholder={attrsInput?.placeholder||""}/>
            }
        </ContainerInput>

    );
}

export default InputTextArea;
