import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import useFormattedInput from '@hooks/useFormattedInput';
import React from 'react';

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
}

const InputPhoneNumber = (props: TProps) => {
    const { onChange: handleOnChange, ...attrs } = props;
    const formatPattern = "XX-XXX-XXX-XXX"
    const { inputRef, handleOnChangeFormattedValue } = useFormattedInput({ value: attrs?.value, onChange: handleOnChange, formatPattern })

    const handleOnChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length === 1 && value === '0') {
            e.preventDefault();
            return;
        }
        handleOnChangeFormattedValue(e)
    }

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>> 
            {...attrs} 
            onChange={handleOnChange} 
            customeElement={{
                ...attrs?.customeElement,
                start: <div>+62</div>
            }}
        >
            {(attrsInput) => (
                <input
                    {...attrsInput}
                    ref={inputRef}
                    onChange={handleOnChangeUpdate}
                    placeholder={attrs?.variant === "v2" ? "" : formatPattern}
                    maxLength={formatPattern?.length}
                />
            )}
        </ContainerInput>
    );
}

export default InputPhoneNumber;
