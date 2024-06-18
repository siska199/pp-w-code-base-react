
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Card from "@components/ui/Card";

const CardIntroCard = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Card'}
      subTitle="Description of Card."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Card`;

export default CardIntroCard;
