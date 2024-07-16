/* eslint-disable @typescript-eslint/ban-ts-comment */

import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Tabs from "@components/ui/Tabs";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroTab = () => {
  const variantTab = {
    "vertical-bordered": {},
    "vertical-pilled": {},
    "horizontal-bordered": {},
    "horizontal-pilled": {},
  };

  const listTab = [
    {
      id: "0",
      label: "Tab 1",
      content: <div className="w-full p-4 h-[10rem] rounded-md  border">TAB CONTENT 1</div>,
    },
    {
      id: "1",
      label: "Tab 2",
      content: <div className="w-full p-4 h-[10rem] rounded-md  border">TAB CONTENT 2</div>,
    },
    {
      id: "2",
      label: "Tab 3",
      content: <div className="w-full p-4 h-[10rem] rounded-md  border">TAB CONTENT 3</div>,
    },
  ];

  const listExample = [
    {
      component: (
        <div className="overflow-x-auto w-full">
          <CardVariousCompVariant<typeof variantTab>
            variant={variantTab}
            groups={["horizontal", "vertical"]}
            Component={(variant, group) => {
              const type = variant?.split("-")[1];
              // @ts-ignore
              return <Tabs layout={group} type={type} listTab={listTab} />;
            }}
            isLogicSplitGroupKey={true}
            withBorder={false}
            customeClass={{ containerCardVariant: "" }}
          />
        </div>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Tab"}
      subTitle="A component tab is a user interface element used in applications, websites, or graphical user interfaces (GUIs) to organize and display content in a structured and accessible manner. Tabs are typically found in navigation bars, toolbars, or within specific sections of an interface where content can be logically grouped and switched between by users."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Tabs}
    />
  );
};

export default CardIntroTab;
