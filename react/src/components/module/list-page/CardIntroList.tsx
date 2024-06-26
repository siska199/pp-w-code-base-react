
import CardIntroComponent from "@components/cards/CardIntroComponent";
import List from "@components/ui/List";

const CardIntroList = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'List'}
      subTitle="Description of List."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for List`;

export default CardIntroList;
