import Table from "@components/ui/Table";
import useAPI from "@hooks/useAPI";
import useTable from "@hooks/useTable";
import { endpoints } from "@lib/config/global-variable";
import { TSettingTable } from "@types";

const ExampleTable = () => {

    const { data, setData, columns, handleOnChange, setting } = useTable({
        initialColumn: [
            {
                name: "Title",
                key: "title",
                isSorted: true
            },
            {
                name: "Body",
                key: "body",
                className: " text-center",
            },
        ],
        initialData: [],
        initialSetting: {
            checked: true,
            pagination: true,
        },
        onFetchData: handleFetchData
    })

    const { apiClient } = useAPI()

    type TData = (typeof data)[0]

    async function handleFetchData(params: TSettingTable<TData>): Promise<any> {
        const resposne = await apiClient({
            endpoint: `${endpoints.posts}?_limit=${params?.itemsPerPage}&_page=${params?.currentPage}`
        })
        return resposne.data
    }


    return (
        <div className="p-[5rem]">
            <Table<(typeof data)[0], true>
                setting={setting}
                onChange={handleOnChange}
                columns={columns}
                data={data}
                setData={setData}
                withNo
            />
        </div>
    )
}



export default ExampleTable