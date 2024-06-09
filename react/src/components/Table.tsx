import InputCheckbox from "@components/ui/inputs/InputCheckbox";
import { TColumn } from "@types";

type WithId<T> = T & { id: string | number };
type WithOptionalChecked<T, TInclude extends boolean> = TInclude extends true ? T & { isChecked: boolean } : T & { isChecked?: never }; // Adjusted here

interface TProps<TData, TIncludeChecked extends boolean = false> {
    columns: TColumn<TData, keyof TData>[];
    data: WithId<WithOptionalChecked<TData, TIncludeChecked>>[];
    additionalFeature?: {
        checked?: boolean;
    };
    setData: React.Dispatch<React.SetStateAction<WithOptionalChecked<TData, TIncludeChecked>[]>>
}


const Table = <TData, TIncludeChecked extends boolean = false>(props: TProps<TData, TIncludeChecked>) => {
    const { columns, data, setData, additionalFeature, } = props

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
            console.log(dataChecked)
            setData(dataChecked)
        }
    }
    return (
        <div className="border relative  overflow-y-auto">
            <table className="table-auto rounded w-full ">
                <thead className="sticky z-[2] top-0 text-gray-500 bg-gray-50 overflow-hidden">
                    <tr className="border-b">
                        {
                            additionalFeature?.checked && handleOnChangeChecked && <th className="column-checked"><InputCheckbox checked={isCheckedAll} value={'cheked-all'} onChange={handleOnChangeChecked} name={"cheked-all"} /></th>
                        }
                        {
                            columns?.map((column, i) => <th className={` column-data ${column?.className}`} key={i}>{column?.name}</th>)
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
                                            {
                                                column?.customeComponent ? column?.customeComponent(dataRow) : dataRow[column.key] as string
                                            }
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

    )
}

export default Table