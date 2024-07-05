import { TColumn, TObject, TResponseAPI, TSettingTable } from "@types";
import React, { useEffect, useState } from "react";

interface TProps {
    initialColumn: any;
    initialData: any;
    initialSetting: any;
    onFetchData: (params: any) => Promise<TObject>
}

const useTable = (props: TProps) => {
    const { initialColumn, initialData, initialSetting, onFetchData: handleFetchData } = props
    const [data, setData] = useState(initialData)

    type TData = (typeof data)[0]

    const [setting, setSetting] = useState<TSettingTable<TData>>({
        sortBy: "",
        sortDir: "",
        currentPage: 1,
        totalPage: 10,
        itemsPerPage: 10,
        ...initialSetting,
    })

    const columns: TColumn<TData, keyof TData>[] = React.useMemo(
        () => initialColumn,
        [initialColumn]
    );

    useEffect(() => {
        handleOnChange()
    }, [])

    const handleOnChange = async (params?: TSettingTable<TData>) => {
        const data: TResponseAPI = await handleFetchData(params)
        setData(data)
        params && setSetting(params)

    }

    return {
        setting,
        columns,
        setData,
        data,
        handleOnChange,

    }
}


export default useTable