
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsTooltip = () => {
  const listItem = [
    {
      label: "children",
      content: "The content to which the tooltip will be attached. Typically, this is the UI element (e.g., button, icon) that triggers the tooltip."
    },
    {
      label: "text",
      content: "The text content that will be displayed inside the tooltip."
    },
    {
      label: "variant",
      content: "Optional. Specifies the position where the tooltip will appear relative to the children. Can be one of 'top', 'bottom', 'left', or 'right'. Defaults to 'top' if not provided."
    },
    {
      label: "customeClass",
      content: "Optional. An object containing custom CSS classes for styling purposes. It has two properties: 'tooltip' (for the tooltip container) and 'rectangle' (for the rectangular background around the tooltip)."
    }
  ];
  

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTooltip;
