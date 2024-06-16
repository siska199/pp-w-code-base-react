
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroCopyText = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'CopyText'}
      subTitle="Description of CopyText."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for CopyText`;

export default CardIntroCopyText;
