import { cn } from "@lib/utils/helper";
import { TTab } from "@types";
import { useEffect, useRef, useState } from "react";

interface TProps {
    type?: "bordered" | "pilled";
    listTab: TTab[];
    customeClass?: {
        container?: string;
        tabList?: string;
        tabItem?: string;
        activeTabItem?: string;
        indicator?: string;
    };
}

const Tabs = (props: TProps) => {
    const { listTab, type = "bordered", customeClass } = props;
    const [activeTab, setActiveTab] = useState(0);
    const [bgStyle, setBgStyle] = useState({});
    const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        if (tabRefs.current[activeTab]) {
            const elmnActiveTab = tabRefs.current[activeTab];
            setBgStyle({ left: elmnActiveTab?.offsetLeft, width: elmnActiveTab?.offsetWidth });
        }
    }, [activeTab]);

    const handleChangeActiveTab = (key: number) => {
        setActiveTab(key);
    };

    return (
        <div className={cn("w-full flex flex-col gap-4", customeClass?.container)}>
            <ul className={cn("flex relative border-b", customeClass?.tabList)}>
                <div
                    className={cn("absolute bg-primary transition-all duration-500", {
                        "bottom-0 h-[1px]": type === "bordered",
                        [customeClass?.indicator || ""]: true,
                    })}
                    style={bgStyle}
                />
                {listTab?.map((tab, i) => (
                    <li
                        ref={(el) => (tabRefs.current[i] = el)}
                        onClick={() => handleChangeActiveTab(i)}
                        key={i}
                        className={cn(
                            "px-8 py-2 relative font-medium cursor-pointer border-0 transition-colors duration-500 z-10",
                            {
                                [`${activeTab === i ? "text-primary" : "text-black"}`]: type === "bordered",
                                [customeClass?.tabItem || ""]: true,
                                [customeClass?.activeTabItem || ""]: activeTab === i,
                            }
                        )}
                    >
                        {tab?.label}
                    </li>
                ))}
            </ul>
            <div className="transition-opacity duration-500 ease-in-out">
                {listTab[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
