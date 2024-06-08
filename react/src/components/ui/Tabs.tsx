import { TTab } from "@types";
import { useState } from "react";

interface TProps {
    listTab: TTab[];
    children?: (params: any) => React.ReactNode;
}

const Tabs = (props: TProps) => {
    const { listTab, children } = props
    const [activeTab, setActiveTab] = useState(0)

    const handleChangeActiveTab = (key: number) => {
        setActiveTab(key)
    }
    return (
        <div className="w-full flex flex-col gap-4">
            <ul className="flex border-b">
                {
                    listTab?.map((tab, i) => <li onClick={() => handleChangeActiveTab(i)} key={i} className={`px-8  py-2 font-medium cursor-pointer border-0   ${activeTab === i && "border-b-2 !text-black border-black"}`}>{tab?.label}</li>)
                }
            </ul>
            {children?.({ activeTab })}
        </div>
    )
}



export default Tabs