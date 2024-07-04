
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsTab = () => {
  const listItem = [
    {
      label: "layout",
      content: "Specifies the layout direction of the tabs. Can be 'horizontal' or 'vertical'. Defaults to 'horizontal'."
    },
    {
      label: "type",
      content: "Specifies the type of tabs. Can be 'bordered' or 'pilled'. Defaults to 'bordered'."
    },
    {
      label: "listTab",
      content: "An array of objects representing each tab. Each object should have a 'label' property for the tab title and a 'content' property for the tab's content to display."
    },
    {
      label: "customeClass",
      content: "Optional. An object containing custom CSS classes for styling purposes:\n- 'container': CSS class for the container wrapping the tabs.\n- 'tabList': CSS class for the <ul> element containing the tab items.\n- 'tabItem': CSS class for individual tab items.\n- 'activeTabItem': CSS class for the active tab item.\n- 'indicator': CSS class for the indicator line or background that highlights the active tab."
    }
  ];
  

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTab;
