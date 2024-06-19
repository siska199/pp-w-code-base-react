
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Card from "@components/ui/Card";

const CardIntroCard = () => {

  const listExample = [
    {
      component: <CardVariantComp
        title={"Access image from url "}
        withBorder={false}
        Component={<Card
        
        />}
      />
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
