
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputCurrency from "@components/ui/InputCurrency";

const CardIntroInputCurrency = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Input Currency'}
      subTitle="Description of InputCurrency."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputCurrency`;

export default CardIntroInputCurrency;
