import Table from "@components/Table";
import Badge from "@components/ui/Badge";
import { TColumn } from "@types";
import React, { useState } from "react";

const ExampleTable = () => {
    type TData = (typeof getData)[0]

    const columns: TColumn<TData, keyof TData>[] = React.useMemo(
        () => [
            {
                name: "Name",
                key: "name",
                className: "w-[10rem] text-center"
            },
            {
                name: "Title",
                key: "title",
                className: ""
            },
            {
                name: "Locate",
                key: "locate",
                className: " text-center"
            },
            {
                name: "Status",
                key: "status",
                className: "",
                customeComponent: (data) => <Badge label={data.status} />
            },
            {
                name: "Role",
                key: "role",
                className: " text-center",
            },
        ],
        []
    );
    const [data, setData] = useState(getData)

    return (
        <div className="p-[5rem]">
            <Table<TData, true> columns={columns} data={data} setData={setData} additionalFeature={{
                checked: true
            }} />
        </div>
    )
}

const getData = [
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
]?.map((data, i) => ({ ...data, id: i, isChecked: false }))


export default ExampleTable