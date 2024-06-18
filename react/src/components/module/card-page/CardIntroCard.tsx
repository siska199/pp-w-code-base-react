
import CardIntroComponent from "@components/cards/CardIntroComponent";
import EmptyData from "@components/ui/EmptyData";

const CardIntroCard = () => {

  const listExample = [
    {
      component:  <EmptyData/>
    },

  ]
  return (
    <CardIntroComponent
      title={'Card'}
      subTitle="Description of Card."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Card`;

export default CardIntroCard;
