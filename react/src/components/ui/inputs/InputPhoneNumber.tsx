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
    const { onChange,  ...attrs } = props;
    const formatPattern = "XX-XXX-XXX-XXX"
    const { inputRef, handleOnChangeFormattedValue } = useFormattedInput({ onChange, formatPattern })

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>> {...attrs} customeElement={{
            ...attrs?.customeElement,
            start: <div>+62</div>
        }}>
            {(attrsInput) => (
                <input
                    {...attrsInput}
                    ref={inputRef}
                    onChange={handleOnChangeFormattedValue}
                    placeholder={attrs?.variant === "v2" ? "" : formatPattern}
                    maxLength={formatPattern?.length}
                />
            )}
        </ContainerInput>
    );
}

export default InputPhoneNumber;
