import { IconFile } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { bytesToMegabytes } from "@lib/utils/helper";
import { TBasePropsInput, TCustomeEventOnChange, TFileType } from "@types";
import React, { useEffect, useRef, useState } from "react";


type TProps = TBasePropsInput &
  Omit<Partial<React.HTMLProps<HTMLInputElement>>, "value" | "onChange"> & {
    multiple?: boolean;
    name: string;
    listAcceptedFile?: TFileType[] | [];
    onChange: (e: TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File>) => void;
    value: (TProps["multiple"] extends true ? File[] : File) | null;
    totalSizeMax?: number;
  };

const InputFile = (props: TProps) => {
  const { listAcceptedFile = [TFileType.ALL], onChange: handleOnChange, totalSizeMax = 5 /*(megabyte)*/, ...attrs } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [acceptedFile, setAcceptedFile] = useState("");
  const [errorMessageDynamic, setErrorMessageDynamic] = useState("");

  useEffect(() => {
    setAcceptedFile(listAcceptedFile?.join(","));
  }, [listAcceptedFile]);

  const handleOnClickInput = () => {
    inputFileRef?.current?.click();
  };

  const handleUpdateOnChange = (e: TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File, { files: File[] }>) => {
    const value = attrs?.multiple ? Array.from(e.target?.files) : e.target?.files[0];
    const isValid = handleValidationInputFile(value);

    isValid &&
      handleOnChange({
        target: {
          name: attrs?.name,
          value,
        },
      } as TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File>);
  };

  const handleValidationInputFile = (value: File[] | File): boolean => {
    const isValid = true;
    const totalSize: number = bytesToMegabytes(Array.isArray(value) ? value?.reduce((acc, data) => acc + data?.size, 0) : value?.size);

    if (totalSize > totalSizeMax) {
      setErrorMessageDynamic("File upload cancelled due to size limit exceeded.");
      return false;
    }

    const fileTypes = (Array.isArray(value) ? value?.map((data) => handleGetFileTypeFromName(data?.name)) : [handleGetFileTypeFromName(value?.name)]) as TFileType[];
    const isAllFileTypesAllowed = fileTypes?.every((fileType) => listAcceptedFile?.includes(fileType));
    
    if(!isAllFileTypesAllowed){
      setErrorMessageDynamic('Please upload the correct type file')
    }

    return isValid;
  };

  const handleGetFileTypeFromName = (name: string) => {
    const type = name?.split(".")?.slice(-1)[0];
    return `.${type}`;
  };

  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>
      {...attrs}
      onChange={handleUpdateOnChange}
      customeClass={{
        ciV2: "!border-none !p-0",
      }}
      errorMessage={errorMessageDynamic}
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
