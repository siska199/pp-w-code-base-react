import { ReactDatePickerProps } from "react-datepicker";

/*----------------GENERAL--------------------*/
export interface TObject {
  [key: string]: any;
}

export type TResponseAPI = TObject;

export interface TCustomeEventOnChange<V, T extends object = NonNullable<unknown>> {
  target: {
    name: string;
    value: V;
    type?: string;
  } & T;
}

export type TEmptyValue = "" | null | undefined;

export interface TOption<TLabel = string> {
  label: TLabel;
  value: string;
}

export interface TTab {
  id: string;
  label: string;
  content: React.ReactNode | string;
}

export interface TItemAccordion {
  label: string;
  content: string | React.ReactNode;
}

export interface TItemList {
  label?: string | React.ReactNode;
  content: React.ReactNode;
  childs?: TItemList[]; // Make it recursive
}

export interface TColumn<TData, TKey extends keyof TData> {
  name: string;
  key: TKey;
  className?: string;
  customeComponent?: (data: TData) => React.ReactNode;
  isSorted?: boolean;
}

export interface TSettingTable<TData> {
  sortBy?: keyof TData;
  sortDir?: "asc" | "desc";
  checked?: boolean;
  pagination?: boolean;
  currentPage: number;
  totalPage: number;
  itemsPerPage: number;
}

export interface TBasePropsInput {
  errorMessage?: string;
  label?: string;
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6";
  customeClass?: {
    label?: string;
    input?: string;
    ciV1?: string;
    ciV2?: string;
    ciV3?: string;
    ciV4?: string;
  };
  customeElement?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
    preStart?: string;
    preEnd?: string;
  };
}

export enum TFileType {
  JPG = ".jpg",
  JPEG = ".jpeg",
  PNG = ".png",
  GIF = ".gif",
  BMP = ".bmp",
  WEBP = ".webp",
  DOC = ".doc",
  DOCX = ".docx",
  PDF = ".pdf",
  TXT = ".txt",
  XLS = ".xls",
  XLSX = ".xlsx",
  CSV = ".csv",
  ALL = "*",
}

export interface TBaseModal {
  isShow: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type TValueFile<TIsMultiple extends boolean = true> = TIsMultiple extends false ? File | null : File[] | null;

type TObjectForm = TBasePropsInput & { value: any; listUploadedFile?: TUploadedFile[] } & Omit<Partial<React.HTMLProps<HTMLInputElement>>, "name" | "value" | "onChange"> &
  Omit<Partial<ReactDatePickerProps<true, true>>, "onChange" | "value"> &
  Omit<Partial<React.HTMLProps<HTMLTextAreaElement>>, "onChange" | "value">;
export type TForm<TKey extends string, TNameRequired extends boolean = true> = Record<TKey, TNameRequired extends true ? TObjectForm & { name: string } : TObjectForm & { name?: string }>;

export interface TUploadedFile {
  id: number;
  status: "onprogress" | "done";
  name: string;
  type: TFileType;
  size: number;
}

export type TEventOnChange = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | TCustomeEventOnChange<any> | TCustomeEventOnChange<TValueFile, { files: FileList; listUploadedFile?: TUploadedFile[] }>;
