
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputRadioButton from "@components/ui/InputRadioButton";

const CardIntroInputRadioButton = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputRadioButton'}
      subTitle="Description of InputRadioButton."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputRadioButton`;

export default CardIntroInputRadioButton;
