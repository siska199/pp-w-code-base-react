import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React, { useRef } from 'react';

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
}

const InputCurrency = (props: TProps) => {
    const { onChange: handleOnChange, value, ...attrs } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const formatValue = (value: string): string => {
        let valueFormatted = value.replace(/[^\d.]+/g, "").replace(/(\.\d{2})\d+/g, "$1").replace(/^0+(?=\d)/, '');
        const parts = valueFormatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        valueFormatted = parts.join('.');
        return valueFormatted;
    };

    const handleOnChangeFormatedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { selectionStart } = e.target;
        let cursorPosition = selectionStart as number;
        const valueDeleted = value[cursorPosition]
        const valueRaw = e.target.value
        const formattedValue = formatValue(valueRaw);

        if (inputRef.current) {
            const inputLengthDifference = formattedValue.length - e.target.value.length;
            cursorPosition = (selectionStart as number) + inputLengthDifference;
            if (valueDeleted === ",") {
                cursorPosition -= 1
            }
        }
        e.target.value = formattedValue

        handleOnChange(e);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.selectionStart = cursorPosition;
                inputRef.current.selectionEnd = cursorPosition;
            }
        }, 0);
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
        handleOnChange(e);
    };

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>  {...attrs} onChange={handleOnChange} value={value} isClerable>
            {
                (attrsInput) => <input
                    {...attrsInput}
                    onBlur={handleOnBlurFormattedValue}
                    onChange={handleOnChangeFormatedValue}
                    value={value}
                    id={attrsInput?.name}
                    placeholder={attrs?.variant === "v2" ? "" : attrs?.placeholder}
                    ref={inputRef}
                />
            }
        </ContainerInput>

    );

}


export default InputCurrency;
