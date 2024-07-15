import { IconClose, IconFile } from "@assets/icons";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import Progressbar from "@components/ui/Progressbar";
import Tooltip from "@components/ui/Tooltip";
import useAPI from "@hooks/useAPI";
import { bytesToMegabytes, delay, isEmptyValue } from "@lib/utils/helper";
import { TBasePropsInput, TCustomeEventOnChange, TFileType, TObject, TUploadedFile } from "@types";
import React, { useEffect, useRef, useState } from "react";

type TProps = TBasePropsInput &
  Omit<Partial<React.HTMLProps<HTMLInputElement>>, "value" | "onChange"> & {
    multiple?: boolean;
    name: string;
    listAcceptedFile?: TFileType[] | [];
    onChange: (e: TCustomeEventOnChange<(TProps["multiple"] extends true ? File[] : File) | null>) => void;
    value: (TProps["multiple"] extends true ? File[] : File) | null;
    totalSizeMax?: number;
  } & (
    | {
        isDirectUpload: true;
        endpoint: string;
        additionalPayload?: TObject;
        listUploadedFile: TUploadedFile[];
      }
    | {
        isDirectUpload?: false;
        endpoint?: undefined;
        additionalPayload?: undefined;
        listUploadedFile?: undefined;
      }
  );

const InputFile = (props: TProps) => {
  const { listAcceptedFile = [TFileType.ALL], onChange: handleOnChange, totalSizeMax = 5 /*(megabyte)*/, endpoint, additionalPayload, isDirectUpload = false, listUploadedFile: listUploadedFilePersist, ...attrs } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [acceptedFile, setAcceptedFile] = useState("");
  const [errorMessageDynamic, setErrorMessageDynamic] = useState("");
  const { progress, apiClient, cancelRequest, setProgress } = useAPI();

  const [listUploadedFile, setListUploadedFile] = useState<TUploadedFile[]>([]);

  useEffect(() => {
    Array.isArray(listUploadedFilePersist) && setListUploadedFile(listUploadedFilePersist);
  }, [listUploadedFilePersist]);

  useEffect(() => {
    setAcceptedFile(listAcceptedFile?.join(","));
  }, [listAcceptedFile]);

  const handleOnClickInput = () => {
    inputFileRef?.current?.click();
  };

  const handleUpdateOnChange = async (e: TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File, { files: File[] }>) => {
    try {
      setProgress(0);
      const files = Array?.from(e.target?.files) || [];
      const isValid = handleValidationInputFile(files);

      if (isDirectUpload && isValid) {
        for (let i = 0; i < files?.length; i++) {
          const file = files[i];
          const id = attrs?.multiple ? listUploadedFile?.length : 0;
          listUploadedFile[id] = {
            id: id,
            name: file.name,
            type: handleGetFileTypeFromName(file.name) as TFileType,
            status: "onprogress",
            size: bytesToMegabytes(file?.size),
          };
          await delay(100);
          await handleOnUpload(file);
          setListUploadedFile(
            listUploadedFile?.map((data) => {
              return data?.id === id
                ? {
                    ...data,
                    status: "done",
                  }
                : data;
            }),
          );
          listUploadedFile[id].status = "done";
        }
      }

      const value = attrs?.multiple ? [...files] : files[0];
      isValid &&
        handleOnChange({
          target: {
            name: attrs?.name,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value: attrs?.multiple && !isEmptyValue(attrs?.value) ? [...files, ...Array.from(attrs?.value)] : value,
            listUploadedFile,
          },
        } as TCustomeEventOnChange<TProps["multiple"] extends true ? File[] : File>);
    } catch (error: any) {
      console.log("error; ", error?.message);
    }
  };

  const handleOnUpload = async (file: File) => {
    try {
      const result = await apiClient({
        endpoint: endpoint || "",
        isForm: true,
        payload: {
          file: file,
          ...additionalPayload,
        },
      });

      console.log("result: ", result);
    } catch (error: any) {
      console.log("error: ", error?.message);
    }
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

    if (!isAllFileTypesAllowed) {
      setErrorMessageDynamic("Please upload the correct type file");
    }

    return isValid;
  };

  const handleGetFileTypeFromName = (name: string) => {
    const type = name?.split(".")?.slice(-1)[0];
    return `.${type}`;
  };

  const handleRemoveItem = (data: TUploadedFile, index: number) => {
    const value = Array.isArray(attrs?.value) ? Array.from(attrs?.value)?.filter((_, i) => i !== index) : null;
    const listUploadedFileUpdated = listUploadedFile?.filter((dataFile) => dataFile?.id !== data?.id);
    handleOnChange({
      target: {
        name: attrs?.name,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value,
        listUploadedFile: listUploadedFileUpdated,
      },
    });
    if (data?.status === "onprogress") cancelRequest();
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
          <div className="flex flex-col gap-4 w-full sm:w-[20rem]">
            <div className="flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer-custome  text-center border border-primary p-4 md:p-8 h-fit md:h-[10rem]" onClick={handleOnClickInput}>
              <div className="p-3 rounded-full w-fit bg-gray-100">
                <IconFile className="icon-gray" />
              </div>
              <p className="text-gray-900 text-center">Select Files to Upload</p>
              <p className="text-gray text-body-small text-center">Drag and Drop Files Here to Upload</p>
            </div>
            <div className="flex flex-col gap-2">
              {listUploadedFile?.map((uploadedFile, i) => (
                <div key={i} className="bg-gray-50 border items-center rounded-md p-2 relative flex gap-2 ">
                  <div className="w-10 h-10 flex-shrink-0 flex">
                    <IconFile className="w-full h-full" />
                  </div>
                  <div className="flex flex-col gap-2 flex-grow max-w-[calc(100%-3rem)] ">
                    <div className="flex justify-between items-center gap-2 ">
                      <Tooltip text={uploadedFile?.name} customeClass={{ tooltip: "text-wrap text-black font-medium w-full truncate" }}>
                        {uploadedFile?.name}
                      </Tooltip>
                      <IconClose className=" cursor-pointer-custome" onClick={() => handleRemoveItem(uploadedFile, i)} />
                    </div>
                    {uploadedFile?.status === "onprogress" && <Progressbar customeClass={{ label: "hidden" }} value={progress} />}
                    <div className="flex fap-2 justify-between">
                      <p className="text-body-small">
                        {uploadedFile?.status === "onprogress" && <>{((uploadedFile?.size * progress) / 100)?.toFixed(2)}MB of </>}
                        {uploadedFile?.size?.toFixed(2)}MB
                      </p>
                      {uploadedFile?.status === "onprogress" && <p className="font-light text-gray text-body-small">Uploading... {progress}%</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <input ref={inputFileRef} {...attrsInput} className="hidden" type="file" accept={acceptedFile} value={""} />
        </>
      )}
    </ContainerInput>
  );
};

export default InputFile;
