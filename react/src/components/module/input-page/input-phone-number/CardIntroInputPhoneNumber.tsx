
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputPhoneNumber from "@components/ui/InputPhoneNumber";

const CardIntroInputPhoneNumber = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputPhoneNumber'}
      subTitle="Description of InputPhoneNumber."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputPhoneNumber`;

export default CardIntroInputPhoneNumber;
