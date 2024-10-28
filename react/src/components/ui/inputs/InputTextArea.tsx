import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TBasePropsInput } from "@types";
import React from "react";

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLTextAreaElement> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextArea = (props: TProps) => {
  const { ...attrs } = props;
  return (
    <ContainerInput<React.HTMLProps<HTMLTextAreaElement>>
      customeClass={{
        ...attrs?.customeClass,
        ciV2: `${attrs?.customeClass?.ciV2} ${attrs?.variant === "v3" && " !rounded-[1.5rem]"}`,
      }}
      {...attrs}
    >
      {(attrsInput) => <textarea {...attrsInput} placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""} />}
    </ContainerInput>
  );
};

export default InputTextArea;
