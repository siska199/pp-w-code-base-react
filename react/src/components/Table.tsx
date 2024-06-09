import { IconArrowUp, IconChevronLeft, IconChevronRight, IconSort } from "@assets/icons";
import Button from "@components/ui/Button";
import InputCheckbox from "@components/ui/inputs/InputCheckbox";
import { TColumn, TSettingTable } from "@types";
import clsx from "clsx";
import React from "react";

type WithId<T> = T & { id: string | number };
type WithOptionalChecked<T, TInclude extends boolean> = TInclude extends true ? T & { isChecked: boolean } : T & { isChecked?: never }; // Adjusted here

interface TProps<TData, TIncludeChecked extends boolean = false> {
    columns: TColumn<TData, keyof TData>[];
    data: WithId<WithOptionalChecked<TData, TIncludeChecked>>[];
    additionalFeature?: {
        checked?: boolean;
    };
    setData: React.Dispatch<React.SetStateAction<WithOptionalChecked<TData, TIncludeChecked>[]>>
    setting: TSettingTable<TData>
    onChange: (params: any) => void;
}


const Table = <TData, TIncludeChecked extends boolean = false>(props: TProps<TData, TIncludeChecked>) => {
    const { columns, data, setData, setting, onChange, additionalFeature, } = props

    const isCheckedAll = !data?.some((dataRow: WithOptionalChecked<TData, TIncludeChecked>) => !dataRow.isChecked)

    const handleOnChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e?.target?.value
        const isChecked = e?.target?.checked
        if (name === "cheked-all") {
            const newData = data?.map((dataRow) => ({
                ...dataRow, isChecked
            }))
            setData(newData)
        } else {
            const valueParse = JSON.parse(value)
            const dataChecked = data?.map((data) => {
                const isCheckedCurrData = valueParse?.id === data?.id ? isChecked : data?.isChecked
                return { ...data, isChecked: isCheckedCurrData }
            })
            setData(dataChecked)
        }
    }

    const handleSortColumn = (params: { key: keyof TData }) => {
        // eslint-disable-next-line no-nested-ternary
        const sortDir = params?.key !== setting?.sortBy ? 'desc' : setting?.sortDir === 'desc' ? 'asc' : 'desc'
        onChange({
            ...setting,
            sortBy: params.key,
            sortDir: sortDir
        })
    }

    const handleOnChangePage = (pageNumber: number) => {
        onChange({
            ...setting,
            currentPage: pageNumber
        })
    }


    const pageNumbers = React.useMemo(() => Array.from({ length: setting.totalPage }, (_, index) => index + 1), [setting.totalPage]);

    const currentPage = setting.currentPage;
    const totalPage = setting.totalPage;
    const adjacentPageCount = 1;

    let startIndex = currentPage - adjacentPageCount - 1;
    let endIndex = currentPage + adjacentPageCount;

    if (startIndex < 0) {
        startIndex = 0;
        endIndex = Math.min(3, totalPage);
    } else if (endIndex == pageNumbers.length - 2) {
        startIndex -= 1
        endIndex -= 1
    } else if (endIndex >= pageNumbers?.length - 1) {
        console.log("masuk kesini")
        startIndex = 0
        endIndex = 3
    }


    const listPageNumberStart = pageNumbers.slice(startIndex, endIndex);
    const listPageNumberEnd = pageNumbers.slice(totalPage - 3, totalPage);

    const ButtonPageNumber = (pageNumber: number) => <Button onClick={() => handleOnChangePage(pageNumber)} variant={"icon"} className={clsx({
        "w-[2.5rem] h-[2.5rem]": true,
        "!bg-gray-100 font-bold": pageNumber === setting?.currentPage
    })}>{pageNumber}</Button>

    return (
        <div className="border rounded-lg">
            <div className="relative  overflow-y-auto  max-h-[30rem] ">
                <table className="table-auto  w-full ">
                    <thead className="sticky z-[2] top-0 text-gray-500 bg-gray-50 overflow-hidden">
                        <tr className="border-b">
                            {
                                additionalFeature?.checked && handleOnChangeChecked && <th className="column-checked"><InputCheckbox checked={isCheckedAll} value={'cheked-all'} onChange={handleOnChangeChecked} name={"cheked-all"} /></th>
                            }
                            {
                                columns?.map((column, i) => <th className={`column-data  ${column?.className}`} key={i}>
                                    <div className="flex items-center">
                                        {column?.name}{column?.isSorted && <span onClick={() => handleSortColumn({ key: column.key })} className="cursor-pointer">
                                            {
                                                setting?.sortBy === column?.key ? <IconArrowUp className={clsx({
                                                    'icon-gray h-[1.25rem] transition-transform duration-300': true,
                                                    "rotate-180": setting?.sortDir === "desc" && setting?.sortBy === column?.key
                                                })} /> : <IconSort className="ml-1 w-[1.1rem] h-[1.1rem]" />
                                            }

                                        </span>}
                                    </div>
                                </th>)
                            }
                        </tr>
                    </thead>
                    <tbody className="text-gray">
                        {
                            data?.map((dataRow, i) => {

                                return <tr key={i} className="border-b ">
                                    {
                                        additionalFeature?.checked && handleOnChangeChecked && <td className="column-checked"><InputCheckbox onChange={handleOnChangeChecked} checked={dataRow?.isChecked} value={JSON.stringify(dataRow)} name={`checked-${i}`} /></td>
                                    }
                                    {
                                        columns?.map((column, j) =>
                                            <td key={j} className={`column-data ${column?.className}`}>
                                                <div className="flex ">
                                                    {
                                                        column?.customeComponent ? column?.customeComponent(dataRow) : dataRow[column.key] as string
                                                    }
                                                </div>
                                            </td>
                                        )
                                    }
                                </tr>
                            }

                            )
                        }
                    </tbody>
                </table>

            </div>

            <div className="flex items-center justify-between px-4 py-2 border-t">
                <Button variant={"white"} disabled={setting?.currentPage <= 1} onClick={() => handleOnChangePage(setting?.currentPage - 1)} className="font-medium text-gray"><IconChevronLeft />Previous</Button>

                <div className="flex items-center">
                    {
                        listPageNumberStart.map((pageNumber, i) => <span key={i}>{ButtonPageNumber(pageNumber)}</span>)
                    }

                    {<div>...</div>}

                    {
                        listPageNumberEnd?.map((pageNumber, i) => <span key={i}>{ButtonPageNumber(pageNumber)}</span>)
                    }
                </div>

                <Button disabled={setting?.currentPage >= setting?.totalPage} onClick={() => handleOnChangePage(setting?.currentPage + 1)} variant={"white"} className="font-medium text-gray">Next<IconChevronRight /></Button>
            </div>
        </div>

    )
}

export default Table