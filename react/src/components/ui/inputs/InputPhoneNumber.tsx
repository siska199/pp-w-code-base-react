import { TBasePropsInput } from "@/types/ui/index";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import useFormattedInput from "@hooks/useFormattedInput";
import React, { useEffect, useState } from "react";

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const InputPhoneNumber = (props: TProps) => {
  const { onChange: handleOnChange, ...attrs } = props;
  const formatPattern = "XX-XXX-XXX-XXX";

  const updateValue = attrs?.value?.replace(/^0+/, "");
  const { inputRef, handleOnChangeFormattedValue, formatValue } = useFormattedInput({ value: updateValue, onChange: handleOnChange, formatPattern });
  const [formatedValue, setFormatedValue] = useState("");

  useEffect(() => {
    setFormatedValue(formatValue(updateValue, formatPattern));
  }, []);

  const handleOnChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value[0] === "0") {
      e.preventDefault();
      return;
    }
    handleOnChangeFormattedValue(e);
    setFormatedValue(formatValue(e.target.value, formatPattern));
  };

  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>
      {...attrs}
      onChange={handleOnChange}
      customeElement={{
        ...attrs?.customeElement,
        start: <div>+62</div>,
      }}
    >
      {(attrsInput) => <input {...attrsInput} value={formatedValue} ref={inputRef} onChange={handleOnChangeUpdate} placeholder={attrs?.variant === "v2" ? "" : formatPattern} maxLength={formatPattern?.length} />}
    </ContainerInput>
  );
};

export default InputPhoneNumber;
