/*----------------GENERAL--------------------*/
export interface TObject {
  [key: string]: any
}

export type TResponseAPI = TObject

export interface TCustomeEventOnChange<V> {
  target: {
    name: string
    value: V
  }
}

export type TEmptyValue = "" | null | undefined

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
  label?: string;
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

export interface TSettingTable<TData,> {
  sortBy?: keyof TData;
  sortDir?: "asc" | "desc";
  checked?: boolean;
  pagination?: boolean;
  currentPage: number;
  totalPage: number;
  itemsPerPage: number;
};

/*----------------FORM--------------------*/


export type TEventOnChange = React.ChangeEvent<HTMLInputElement> | TCustomeEventOnChange<any>


