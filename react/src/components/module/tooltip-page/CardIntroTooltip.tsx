
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroTooltip = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Tooltip'}
      subTitle="Description of Tooltip."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Tooltip`;

export default CardIntroTooltip;
