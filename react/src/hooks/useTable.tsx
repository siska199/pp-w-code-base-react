import { TColumn, TResponseAPI, TSettingTable } from "@types";
import React, { useEffect, useState } from "react";

interface TProps {
    initialColumn: any;
    initialData: any;
    initialSetting: any;
}

const useTable = (props: TProps) => {
    const { initialColumn, initialData, initialSetting } = props
    const [data, setData] = useState(initialData)

    type TData = (typeof data)[0]

    const [setting, setSetting] = useState<TSettingTable<TData>>({
        ...initialSetting,
        currentPage: 1,
        totalPage: 10,
    })

    const columns: TColumn<TData, keyof TData>[] = React.useMemo(
        () => initialColumn,
        [initialColumn]
    );

    useEffect(() => {
        handleOnChange()
    }, [])

    const handleOnChange = async (params?: TSettingTable<TData>) => {
        const response: TResponseAPI = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    message: 'Success Get Data',
                    data: listData
                });
            }, 1000);
        });

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

const listData = [
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },

    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Cody Fisher",
        email: "cody.fisher@example.com",
        title: "Product Directives Officer",
        department: "Intranet",
        status: "Active",
        role: "Owner",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Esther Howard",
        email: "esther.howard@example.com",
        title: "Forward Response Developer",
        department: "Directives",
        status: "Active",
        role: "Member",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jenny Wilson",
        email: "jenny.wilson@example.com",
        title: "Central Security Manager",
        department: "Program",
        status: "Active",
        role: "Member",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Kristin Watson",
        email: "kristin.watson@example.com",
        title: "Lean Implementation Liaison",
        department: "Mobility",
        status: "Active",
        role: "Admin",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Cameron Williamson",
        email: "cameron.williamson@example.com",
        title: "Internal Applications Engineer",
        department: "Security",
        status: "Active",
        role: "Member",
        locate: "Locate",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    }
]?.map((data, i) => ({ ...data, id: i }))


export default useTable