import ContainerInput from "@components/ui/inputs/ContainerInput";
import useFormattedInput from '@hooks/useFormattedInput';
import { TBasePropsInput } from "@types";
import React from 'react';

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
}

const InputNPWP = (props: TProps) => {
    const { onChange: handleOnChange, ...attrs } = props;
    const formatPattern = "XX.XXX.XXX.X-XXX.XXX"
    const { inputRef, handleOnChangeFormattedValue } = useFormattedInput({ value: attrs?.value, onChange: handleOnChange, formatPattern })

    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>  {...attrs} onChange={handleOnChange} isClerable>
            {
                (attrsInput) => <input
                    ref={inputRef}
                    {...attrsInput}
                    maxLength={formatPattern?.length}
                    onChange={handleOnChangeFormattedValue}
                    placeholder={attrs?.variant === "v2" ? "" : "XX.XXX.XXX.X-XXX.XXX"}
                />
            }
        </ContainerInput>

    );

}


export default InputNPWP;
