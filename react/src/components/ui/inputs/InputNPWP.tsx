import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from 'react';

interface TProps extends TBasePropsInput,React.HTMLProps<HTMLInputElement>{
    onChange    : (e:React.ChangeEvent<HTMLInputElement>) => void;
    name        : string;
    value       : string;
}

const InputNPWP = (props: TProps) => {
    const { onChange,value, ...attrs } = props;


    const formatValue= (value: string): string => {
        const digitsOnly = value.replace(/\D/g, "")?.slice(0,15);
        let formattedValue = digitsOnly

        //XX.XXX.XXX.X-XXX.XXX
        if(digitsOnly?.length<=5){
            formattedValue = digitsOnly.replace(/(\d{2})(\d{1,3})/, "$1.$2");
        }
        else if(digitsOnly?.length>5 && digitsOnly?.length<=8){
            formattedValue = digitsOnly.replace(/(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3");
        }
        else if(digitsOnly?.length>8 && digitsOnly?.length<=9){
            formattedValue = digitsOnly.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3.$4");
        }else if(digitsOnly?.length>9 && digitsOnly?.length<=12){
            formattedValue = digitsOnly.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{1,3})/, "$1.$2.$3.$4-$5");
        }else{
            formattedValue = digitsOnly.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{1,3})/, "$1.$2.$3.$4-$5.$6");
        }

        formattedValue = formattedValue.replace(/\.$/, "")
        return formattedValue;

    };

    const handleOnChangeFormatedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatValue(e.target.value);
        e.target.value = formattedValue
        onChange(e);
    }
return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>  {...attrs}>
        {
            (attrsInput) => <input  {...attrsInput} onChange={handleOnChangeFormatedValue} value={value} id={attrsInput?.name} placeholder={attrs?.variant === "v2" ? "" :"XX.XXX.XXX.X-XXX.XXX"} />
        }
    </ContainerInput>

);
    
}


export default InputNPWP;
