
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsDivider = () => {
  const listItem = [
    {
      label: "variant",
      content: "Determines the alignment of the divider line relative to the text. Options include 'left-aligned', 'center-aligned', 'right-aligned'. Defaults to 'center-aligned'."
    },
    {
      label: "text",
      content: "The text content displayed alongside the divider. This prop is required and accepts a string."
    },
    {
      label: "width",
      content: "Specifies the width of the divider line. Accepts a string value. Defaults to '100%'."
    },
    {
      label: "height",
      content: "Specifies the height (thickness) of the divider line. Accepts a string value. Defaults to '1px'."
    },
    {
      label: "customeClass",
      content: "Allows customization of CSS classes for the text. Should be an object with a 'text' property that specifies additional class names."
    }
  ];

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsDivider;
