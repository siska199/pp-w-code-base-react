import { IconFile } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TAcceptFileType, TBasePropsInput, TCustomeEventOnChange, TValueFile } from "@types";
import React, { useEffect, useRef, useState } from "react";

interface TProps extends TBasePropsInput, Omit<Partial<React.HTMLProps<HTMLInputElement>>, "value" | "onChange"> {
  onChange: (e: TCustomeEventOnChange<TValueFile>) => void;
  name: string;
  listAcceptedFile?: TAcceptFileType[];
  value: TValueFile;
}

const InputFile = (props: TProps) => {
  const { listAcceptedFile = ["*"], onChange: handleOnChange, ...attrs } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [acceptedFile, setAcceptedFile] = useState("");

  useEffect(() => {
    setAcceptedFile(listAcceptedFile?.join(","));
  }, [listAcceptedFile]);

  const handleOnClickInput = () => {
    inputFileRef?.current?.click();
  };

  const handleUpdateOnChange = (e: TCustomeEventOnChange<TValueFile, { files: TValueFile }>) => {
    handleOnChange({
      target: {
        name: attrs?.name,
        value: e.target.files,
      },
    });
  };

  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>
      {...attrs}
      onChange={handleUpdateOnChange}
      customeClass={{
        ciV2: "!border-none !p-0",
      }}
    >
      {(attrsInput) => (
        <>
          <Container className="rounded-md cursor-pointer-custome  text-center border border-primary p-8 w-[20rem] h-[10rem]" variant={"vcc"} onClick={handleOnClickInput}>
            <div className="p-3 rounded-full bg-gray-100">
              <IconFile className="icon-gray" />
            </div>
            <p className="text-gray-900 ">Select Files to Upload</p>
            <p className="text-gray text-body-small">Drag and Drop Files Here to Upload</p>
          </Container>
          <input ref={inputFileRef} {...attrsInput} className="hidden" type="file" accept={acceptedFile} value={""} />
        </>
      )}
    </ContainerInput>
  );
};

export default InputFile;
