
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroCard = () => {

  const listExample = [
    {
      component:  <>Siska</>
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
