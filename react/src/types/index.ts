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

export interface TOption {
  label: string;
  value: string;
}

export interface TTab {
  id: string;
  label: string;
}

export interface TItemAccordion {
  label:string;
  content: string;
}

export interface TItemList {
  label?: string;
  content: React.ReactNode;
  childs?: TItemList[]; // Make it recursive
}


export interface TItemMenu {
  name: string;
  url?: string;
  childs?: TItemMenu[];
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
};

/*----------------FORM--------------------*/
