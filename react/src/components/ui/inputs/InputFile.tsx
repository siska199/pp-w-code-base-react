import { IconClose, IconFile } from "@assets/icons";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import Progressbar from "@components/ui/Progressbar";
import Tooltip from "@components/ui/Tooltip";
import useAPI from "@hooks/useAPI";
import { bytesToMegabytes, cn, delay, isEmptyValue, truncateName } from "@lib/utils/helper";
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
    listUploadedFile: TUploadedFile[];
  } & (
    | {
        isDirectUpload?: true;
        endpoint?: string;
        additionalPayload?: TObject;
      }
    | {
        isDirectUpload?: false;
        endpoint?: undefined;
        additionalPayload?: undefined;
      }
  );

const InputFile = (props: TProps) => {
  const { listAcceptedFile = [TFileType.ALL], onChange: handleOnChange, totalSizeMax = 5 /*(megabyte)*/, endpoint, additionalPayload, isDirectUpload = false, listUploadedFile: listUploadedFilePersist, ...attrs } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const { progress, apiClient, cancelRequest, setProgress } = useAPI();

  const [acceptedFile, setAcceptedFile] = useState("");
  const [errorMessageDynamic, setErrorMessageDynamic] = useState("");
  const [listUploadedFile, setListUploadedFile] = useState<TUploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    Array.isArray(listUploadedFilePersist) && setListUploadedFile(listUploadedFilePersist);
  }, [listUploadedFilePersist]);

  useEffect(() => {
    setAcceptedFile(listAcceptedFile?.join(","));
  }, [listAcceptedFile]);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    handleUpdateOnChange(files);
    setDragActive(false);
  };

  const handleOnClickInput = () => {
    inputFileRef?.current?.click();
  };

  const handleUpdateOnChange = async (filesParams: File[]) => {
    try {
      setProgress(0);
      const files = [...filesParams];
      const isValid = handleValidationInputFile(files);

      if (isValid && !isEmptyValue(files)) {
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

          const result = isDirectUpload ? await handleOnUpload(file) : { success: true };
          if (result?.success) {
            listUploadedFile[id].status = "done";
          } else {
            delete listUploadedFile[id];
          }
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
        message: {
          success: "Success upload data",
          error: "Error upload data",
        },
      });
      return result;
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
      onChange={(e) => handleUpdateOnChange(e.target.files)}
      customeClass={{
        ciV2: "!border-none !p-0",
      }}
      errorMessage={errorMessageDynamic}
    >
      {(attrsInput) => (
        <>
          <div className={"flex flex-col gap-4 w-full sm:w-[20rem]"}>
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleFileDrop}
              className={cn({
                "flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer-custome  text-center border-2 border-dashed  p-4 md:p-8 h-fit md:h-[10rem]": true,
                " border-primary": dragActive,
              })}
              onClick={handleOnClickInput}
            >
              <div className="p-3 rounded-full w-fit bg-gray-100">
                <IconFile className="icon-gray" />
              </div>
              <p className="text-gray-900 text-center">Select Files to Upload</p>
              <p className="text-gray text-body-small text-center">Drag and Drop Files Here to Upload</p>
            </div>
            <div className="flex flex-col gap-2">{listUploadedFile?.map((uploadedFile, i) => <CardFileUploaded key={i} i={i} progress={progress} uploadedFile={uploadedFile} onRemoveItem={handleRemoveItem} />)}</div>
          </div>
          <input ref={inputFileRef} {...attrsInput} className="hidden" type="file" environt accept={acceptedFile} value={""} />
        </>
      )}
    </ContainerInput>
  );
};

interface TPropsCardFileUploaded {
  uploadedFile: TUploadedFile;
  onRemoveItem: (uploadedFile: TUploadedFile, i: number) => void;
  progress: number;
  i: number;
}

const CardFileUploaded = (props: TPropsCardFileUploaded) => {
  const { uploadedFile, onRemoveItem: handleRemoveItem, progress, i } = props;
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [widthTooltip, setWidthTooltip] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidthTooltip(tooltipRef?.current?.offsetWidth || 0);
    }, 0);
  }, []);

  return (
    <div className="bg-gray-50 border items-center rounded-md p-2 relative flex gap-2 ">
      <IconFile className="w-10 h-10 flex-shrink-0 flex" />

      <div className="flex flex-col gap-2 flex-grow max-w-[calc(100%-3rem)] ">
        <div className="flex justify-between items-center gap-2 w-full">
          <Tooltip text={uploadedFile?.name} customeClass={{ tooltip: "w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] !px-0 text-wrap text-black font-medium  truncate" }} ref={tooltipRef}>
            {truncateName(uploadedFile?.name, widthTooltip || 0)}
          </Tooltip>
          <IconClose className="cursor-pointer-custome" onClick={() => handleRemoveItem(uploadedFile, i)} />
        </div>
        <Progressbar customeClass={{ container: uploadedFile?.status !== "onprogress" ? "hidden" : "", label: "hidden" }} value={progress} />
        <div className="flex fap-2 justify-between">
          <p className="text-body-small">
            {uploadedFile?.status === "onprogress" && <>{((uploadedFile?.size * progress) / 100)?.toFixed(2)}MB of </>}
            {uploadedFile?.size?.toFixed(2)}MB
          </p>
          <p
            className={cn({
              "font-light text-gray text-body-small": true,
              hidden: uploadedFile?.status !== "onprogress",
            })}
          >
            Uploading... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputFile;
