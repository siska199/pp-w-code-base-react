
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsList = () => {
  const listItem = [
    {
      label: "title",
      content: "Optional title for the list. If provided, it will be displayed at the top of the list with a Badge component."
    },
    {
      label: "items",
      content: "An array of objects (TItemList) where each object represents an item to be rendered in the list"
    },
    {
      label: "customeClass",
      content: "Optional object allowing customization of CSS classes for <ul> (unordered list) and <li> (list item) elements within the List component."
    },
    {
      label: "variantBadge",
      content: "Optional object that maps levels (numbers) to variants for Badge components, allowing customization of badge appearances based on item nesting levels."
    },
    {
      label: "customeIconLi",
      content: "Optional React node to customize the icon rendered next to each list item. If not provided, a default small dot icon is displayed."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsList;
