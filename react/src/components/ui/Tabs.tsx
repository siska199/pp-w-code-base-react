import { cn } from "@lib/utils/helper";
import { TObject, TTab } from "@types";
import { useEffect, useRef, useState } from "react";

export interface TTabProps {
  layout?: "horizontal" | "vertical";
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

const Tabs = (props: TTabProps) => {
  const { listTab, type = "bordered", customeClass, layout = "horizontal" } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [bgStyle, setBgStyle] = useState({});
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const elmnActiveTab = tabRefs.current[activeTab];
      const updateBgStyle: TObject = { left: elmnActiveTab?.offsetLeft, width: elmnActiveTab?.offsetWidth };

      if (layout === "vertical" && type === "pilled") {
        updateBgStyle.top = elmnActiveTab?.offsetTop;
        updateBgStyle.height = elmnActiveTab?.offsetHeight;
      }

      if (layout === "vertical" && type == "bordered") {
        const elmnRect = elmnActiveTab?.getBoundingClientRect();
        const containerRect = elmnActiveTab?.parentElement?.getBoundingClientRect();

        if (elmnRect && containerRect) {
          // Adjust top position to place the border below the tab
          updateBgStyle.top = elmnRect.bottom - containerRect.top;
        }
      }

      setBgStyle(updateBgStyle);
    }
  }, [activeTab]);

  const handleChangeActiveTab = (key: number) => {
    setActiveTab(key);
  };

  return (
    <div
      className={cn({
        "w-full flex flex-col gap-4 overflow-x-auto !overflow-visible": true,
        [customeClass?.container || ""]: true,
        "flex-row gap-6": layout === "vertical",
      })}
    >
      <ul
        className={cn({
          "flex relative ": true,
          [customeClass?.tabList || ""]: customeClass?.tabList,
          "flex-col w-fit flex-shrink-0 ": layout === "vertical",
          "border-b": layout === "horizontal" && type === "bordered",
        })}
      >
        <div
          className={cn("absolute bg-primary transition-all duration-300", {
            "bottom-0 h-[1px]": type === "bordered",
            "bottom-0 h-full rounded-md": type === "pilled",
            [customeClass?.indicator || ""]: true,
          })}
          style={bgStyle}
        />

        {listTab?.map((tab, i) => (
          <li
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => handleChangeActiveTab(i)}
            key={i}
            className={cn(" px-8 justify-center py-2 relative flex  cursor-pointer border-0 transition-colors duration-500 z-10", {
              [`${activeTab === i && "font-medium"}`]: true,
              [`${activeTab === i ? "text-primary" : "text-gray"}`]: type === "bordered",
              [`${activeTab === i ? "text-white" : "text-gray"}`]: type === "pilled",
              [customeClass?.tabItem || ""]: true,
              [customeClass?.activeTabItem || ""]: activeTab === i,
              "flex-grow-0 px-3": layout === "vertical",
              "": layout === "horizontal",
            })}
          >
            {tab?.label}
          </li>
        ))}
      </ul>
      <div
        className={cn({
          "flex-grow flex-shrink-0 transition-opacity duration-500 ease-in-out w-full ": true,
          "overflow-x-auto": layout === "vertical",
        })}
      >
        {listTab[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
