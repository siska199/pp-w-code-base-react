
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsHelperMessage = () => {
  const listItem = [
    {
      label: "message",
      content: "The actual message text to be displayed. It should be a string.",
    },
    {
      label: "variant",
      content: "Determines the style variant of the message. Can be one of 'error', 'success', or 'warning'.",
    },
    {
      label: "className",
      content: "Optional. Additional CSS class names to customize the appearance of the <p> element.",
    },
    {
      label: "...attrs",
      content: "Any additional HTML attributes (like id, style, etc.) that can be passed to the underlying <p> element.",
    },
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsHelperMessage;
