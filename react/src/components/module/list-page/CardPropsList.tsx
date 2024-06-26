
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsList = () => {
  const listItem = [
    {
      label: "prop1",
      content: "Description of prop1"
    },
    {
      label: "prop2",
      content: "Description of prop2"
    }
  ];

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsList;
