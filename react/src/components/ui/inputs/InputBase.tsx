import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TBasePropsInput } from "@types";
import React from "react";

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = (props: TProps) => {
  const { ...attrs } = props;
  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>> {...attrs} isClerable>
      {(attrsInput) => <input {...attrsInput} id={attrsInput?.name} placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""} />}
    </ContainerInput>
  );
};

export default InputBase;
