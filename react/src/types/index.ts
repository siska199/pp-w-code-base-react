import { TBasePropsInput } from "@/types/ui/index";
import { ReactDatePickerProps } from "react-datepicker";

/*----------------GENERAL--------------------*/
export interface TObject {
  [key: string]: any;
}

export type TResponseAPI = TObject;

export interface TCustomeEventOnChange<V> {
  target: {
    name: string;
    value: V;
  };
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
  content: string;
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

/*----------------FORM--------------------*/

type TObjectForm = TBasePropsInput & { value: any } & Omit<Partial<React.HTMLProps<HTMLInputElement>>, "name" | "value" | "onChange"> & Omit<Partial<ReactDatePickerProps<true, true>>, "onChange" | "value">;
export type TForm<TKey extends string, TNameRequired extends boolean = true> = Record<TKey, TNameRequired extends true ? TObjectForm & { name: string } : TObjectForm & { name?: string }>;

export type TEventOnChange = React.ChangeEvent<HTMLInputElement> | TCustomeEventOnChange<any>;
