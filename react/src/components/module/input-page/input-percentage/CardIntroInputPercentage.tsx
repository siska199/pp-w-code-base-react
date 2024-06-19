
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputPercentage from "@components/ui/InputPercentage";

const CardIntroInputPercentage = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputPercentage'}
      subTitle="Description of InputPercentage."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputPercentage`;

export default CardIntroInputPercentage;
