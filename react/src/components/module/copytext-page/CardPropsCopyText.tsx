
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsCopyText = () => {
  const listItem = [
    {
      label: "layout",
      content: "Optional. Defines the variant (layout) of the Container component. It can be 'hbc' or 'hsc'."
    },
    {
      label: "text",
      content: "Required. The text string that will be copied to the clipboard."
    },
    {
      label: "classContainer",
      content: "Optional. Additional CSS classes for styling the Container component."
    },
    {
      label: "classText",
      content: "Optional. Additional CSS classes for styling the text element."
    },
    {
      label: "classIcon",
      content: "Optional. Additional CSS classes for styling the icon inside the Button component."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsCopyText;
