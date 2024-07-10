import { TBasePropsInput } from "@/types/ui/index";
import { IconPercentage } from "@assets/icons";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from "react";

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputPercentage = (props: TProps) => {
  const { onChange: handleOnChange, value, ...attrs } = props;

  const handleOnChangeFormatedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueFormatted: string = e.target.value;
    valueFormatted = valueFormatted
      .replace(/[^\d.]+/g, "")
      .replace(/(\..*?)\./g, "$1")
      .replace(/(\.\d\d)\d+/g, "$1")
      .replace(/^0+(?=\d)/, "");

    if ((parseFloat(valueFormatted) < 0 || parseFloat(valueFormatted) > 100) && valueFormatted !== "") {
      valueFormatted = String(value);
    }
    e.target.value = valueFormatted;
    handleOnChange(e);
  };
  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>
      {...attrs}
      customeElement={{
        ...attrs?.customeElement,
        end: <IconPercentage />,
      }}
      onChange={handleOnChange}
      value={value}
    >
      {(attrsInput) => <input {...attrsInput} onChange={handleOnChangeFormatedValue} value={value} id={attrsInput?.name} placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""} />}
    </ContainerInput>
  );
};

export default InputPercentage;
