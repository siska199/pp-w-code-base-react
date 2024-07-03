
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroTab = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Tab'}
      subTitle="Description of Tab."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Tab`;

export default CardIntroTab;
