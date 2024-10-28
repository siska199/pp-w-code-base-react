import { IconPercentage } from "@assets/icons";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TBasePropsInput } from "@types";
import React, { useEffect, useState } from "react";

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  maxValue?: number;
  minValue?: number;
}

const InputPercentage = (props: TProps) => {
  const { onChange: handleOnChange, value, maxValue = 100, minValue = 0, ...attrs } = props;
  const [formattedValue, setFormattedValue] = useState<string>(value);

  useEffect(() => {
    setFormattedValue(formatValue(value));
  }, []);

  const formatValue = (value: string) => {
    let valueFormatted = value
      .replace(/[^\d.]+/g, "")
      .replace(/(\..*?)\./g, "$1")
      .replace(/(\.\d\d)\d+/g, "$1")
      .replace(/^0+(?=\d)/, "");

    const numericValue = parseFloat(valueFormatted);
    if (!isNaN(numericValue)) {
      if (numericValue < minValue) {
        valueFormatted = String(minValue);
      } else if (numericValue > maxValue) {
        valueFormatted = String(maxValue);
      }
    }

    return valueFormatted;
  };

  const handleOnChangeFormatedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFormatted: string = formatValue(e.target.value);
    e.target.value = valueFormatted;
    handleOnChange(e);
    setFormattedValue(e.target.value);
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
      {(attrsInput) => <input {...attrsInput} onChange={handleOnChangeFormatedValue} value={formattedValue} id={attrsInput?.name} placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""} />}
    </ContainerInput>
  );
};

export default InputPercentage;
