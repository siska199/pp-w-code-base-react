import { IconFile } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TAcceptFileType, TBasePropsInput, TCustomeEventOnChange } from "@types";
import React, { useEffect, useRef, useState } from "react";

type TProps = TBasePropsInput &
  Omit<Partial<React.HTMLProps<HTMLInputElement>>, "value" | "onChange"> & {
    multiple?: boolean;
    name: string;
    listAcceptedFile?: TAcceptFileType[];
    onChange: (e: TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File>) => void;
    value: TProps["multiple"] extends true ? File[] : File;
  };

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

  const handleUpdateOnChange = (e: TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File, { files: File[] }>) => {
    handleOnChange({
      target: {
        name: attrs?.name,
        value:attrs?.multiple? e.target?.files:e.target?.files[0],
      },
    } as TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File>);
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
