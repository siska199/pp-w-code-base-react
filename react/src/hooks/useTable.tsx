import { TColumn, TObject, TResponseAPI, TSettingTable } from "@types";
import React, { useEffect, useState } from "react";

interface TProps {
    initialColumn: any;
    initialData: any;
    initialSetting: any;
    onFetchData: () => Promise<TObject>
}

const useTable = (props: TProps) => {
    const { initialColumn, initialData, initialSetting, onFetchData: handleFetchData } = props
    const [data, setData] = useState(initialData)

    type TData = (typeof data)[0]

    const [setting, setSetting] = useState<TSettingTable<TData>>({
        currentPage: 1,
        totalPage: 10,
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
        const response: TResponseAPI = await handleFetchData()

        if (response?.status) {
            setData(response?.data)
        }


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