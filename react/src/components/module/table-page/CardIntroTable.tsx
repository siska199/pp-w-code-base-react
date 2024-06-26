
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Table from "@components/ui/Table";

const CardIntroTable = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Table'}
      subTitle="Description of Table."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Table`;

export default CardIntroTable;
