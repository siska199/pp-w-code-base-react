import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsBreadcrumb = () => {
  const listItem = [
    {
      label: "items",
      content: "Array of objects containing url and label",
    },
    {
      label: "customeIconDivider",
      content: "Custom divider icon between breadcrumb items",
    },
    {
      label: "withIconDivider",
      content: "Boolean to display divider icon",
    },
    {
      label: "customeClass",
      content: "Custom CSS classes, especially for active item",
    },
    {
      label: "activeItem",
      content: "Index of the currently active breadcrumb item",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsBreadcrumb;
