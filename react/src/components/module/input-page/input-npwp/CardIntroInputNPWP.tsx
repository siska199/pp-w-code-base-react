
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputNPWP from "@components/ui/InputNPWP";

const CardIntroInputNPWP = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Input NPWP'}
      subTitle="Description of Input NPWP."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputNPWP`;

export default CardIntroInputNPWP;
