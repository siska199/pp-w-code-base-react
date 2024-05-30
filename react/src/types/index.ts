export interface TObject {
    [key: string]: any
}

export interface TCustomeEventOnChange<V> {
    target: {
      name: string
      value: V
    }
}


  