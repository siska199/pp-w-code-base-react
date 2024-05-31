import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from 'react';

interface TProps extends TBasePropsInput,React.HTMLProps<HTMLInputElement>{
    onChange    : (e:React.ChangeEvent<HTMLInputElement>) => void;
    name        : string;
    value       : string;
}

const InputCurrency = (props: TProps) => {
    const { onChange,value, ...attrs } = props;


    const formatValue = (value: string): string => {
        let valueFormatted = value.replace(/[^\d.]+/g, "").replace(/(\.\d{2})\d+/g, "$1").replace(/^0+(?=\d)/, '');

        const parts = valueFormatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        valueFormatted = parts.join('.');
        return valueFormatted;
    };

    const handleOnChangeFormatedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatValue(e.target.value);
        e.target.value = formattedValue
        onChange(e);
    }

    const handleOnBlurFormattedValue = (e: React.FocusEvent<HTMLInputElement>) => {
        let valueFormatted = e.target.value;
        if (valueFormatted !== "") {
            const parts = valueFormatted.split('.');
    
            if (parts.length === 1) {
                valueFormatted += '.00';
            }
            else if (parts[1].length < 2) {
                valueFormatted += '0'.repeat(2 - parts[1].length);
            }
        }
        e.target.value = valueFormatted;
        onChange(e);
    };

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>  {...attrs}>
            {
                (attrsInput) => <input  {...attrsInput}     onBlur={handleOnBlurFormattedValue}
                onChange={handleOnChangeFormatedValue} value={value} id={attrsInput?.name} placeholder={attrs?.variant === "v2" ? "" :attrs?.placeholder} />
            }
        </ContainerInput>

    );
    
}


export default InputCurrency;
