
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroProgressStep = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Progress Step'}
      subTitle="Description of ProgressStep."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for ProgressStep`;

export default CardIntroProgressStep;
