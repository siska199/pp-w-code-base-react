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
  label : string;
  value:string;
}
/*----------------FORM--------------------*/
