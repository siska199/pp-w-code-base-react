import { useRef } from 'react';

interface TProps{
    onChange        :  (e: React.ChangeEvent<HTMLInputElement>) => void;
    formatPattern   : string;
}

const useFormattedInput = (props:TProps) => {
    const { onChange,formatPattern} = props
    const inputRef = useRef<HTMLInputElement>(null);

    const formatValue = (value: string, pattern: string): string => {
        const digitsOnly = value.replace(/\D/g, "");
        let formattedValue = "";
        let patternIndex = 0;
        let valueIndex = 0;
    
        while (valueIndex < digitsOnly.length && patternIndex < pattern.length) {
            if (pattern[patternIndex] === "X") {
                formattedValue += digitsOnly[valueIndex];
                valueIndex++;
            } else {
                formattedValue += pattern[patternIndex];
            }
            patternIndex++;
        }
    
        return formattedValue;
    };


    const handleOnChangeFormattedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { selectionStart } = e.target;
        const formattedValue = formatValue(e.target.value, formatPattern);
        let cursorPosition = selectionStart;
        if (inputRef.current) {
            const inputLengthDifference = formattedValue.length - e.target.value.length;
            cursorPosition = (selectionStart as number) + inputLengthDifference;
        }
        e.target.value = formattedValue;
        onChange(e);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.selectionStart = cursorPosition;
                inputRef.current.selectionEnd = cursorPosition;
            }
        }, 0);
    };

    return { inputRef, handleOnChangeFormattedValue };
};

export default useFormattedInput;
