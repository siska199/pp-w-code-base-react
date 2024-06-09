/*----------------GENERAL--------------------*/
export interface TObject {
  [key: string]: any
}
export interface TCustomeEventOnChange<V> {
  target: {
    name: string
    value: V
  }
}

export type TEmptyValue = "" | null | undefined

export interface TOption {
  label: string;
  value: string;
}

export interface TTab {
  id: string;
  label: string;
}

export interface TColumn<TData, TKey extends keyof TData> {
  name: string;
  key: TKey;
  className?: string;
  customeComponent?: (data: TData) => React.ReactNode;
  isSorted?: boolean;
}

export interface TSettingTable<TData,> {
  sortBy?: keyof TData;
  sortDir?: "asc" | "desc";
  currentPage: number;
  totalPage: number;
};

/*----------------FORM--------------------*/
