import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsBadge = () => {
  const listItem = [
    {
      label: "label",
      content: "Represents the text content of the badge.",
    },
    {
      label: "className",
      content: "Allows you to provide additional CSS classes to the badge component.",
    },
    {
      label: "variant",
      content: "Specifies the color variant of the badge. Used to determine the background color and text color.",
    },
    {
      label: "customeElement",
      content: "Allows you to pass a custom React element or component to be rendered inside the badge.",
    },
    {
      label: "shapeBadge",
      content: "Determines the shape of the badge. Can be 'pilled', 'rounded', or 'circle'.",
    },
    {
      label: "sizeBadge",
      content: "Specifies the size of the badge. Can be 'small', 'base', or 'large'.",
    },
    {
      label: "attrs",
      content: "Allows you to pass additional HTML attributes to the underlying <span> element of the badge component.",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsBadge;
