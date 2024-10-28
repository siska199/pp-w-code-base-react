
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsTab = () => {
  const listItem = [
    {
      label: "layout",
      content: <div>Specifies the layout direction of the tabs. Can be <span className="italic">horizontal</span> or <span className="italic">vertical</span>. Defaults to <span className="italic">horizontal</span>.</div>
    },
    {
      label: "type",
      content: <div>Specifies the type of tabs. Can be <span className="italic">bordered</span> or <span className="italic">pilled</span>. Defaults to <span className="italic">bordered</span>.</div>
    },
    {
      label: "listTab",
      content: <div>An array of objects representing each tab. Each object should have a <span className="italic">label</span> property for the tab title and a <span className="italic">content</span> property for the tab&apos;s content to display.</div>
    },
    {
      label: "customeClass (Optional)",
      content: (
        <div>
          An object containing custom CSS classes for styling purposes:
          <List
            customeIconLi={{
              0:<div className="w-[0.35rem] h-[0.35rem] mt-2 flex-shrink-0 bg-gray-500 rounded-[50%]"/>
            }}
            items={[
              {
                label:'ul:',
                content:<>CSS class for the <code>&lt;ul&gt;</code> element containing the tab items.</>
              },
              {
                label:'li:',
                content:<>CSS class for individual tab items.</>
              },
              {
                label:'label:',
                content:<>CSS class for the label within each tab item.</>
              }
            ]}
          />
          These classes can be applied to customize the appearance of the tabs and their contents.
        </div>
      )
    }
  ];
  
  

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTab;
