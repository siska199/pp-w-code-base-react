
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputCheckbox from "@components/ui/InputCheckbox";

const CardIntroInputCheckbox = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputCheckbox'}
      subTitle="Description of InputCheckbox."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputCheckbox`;

export default CardIntroInputCheckbox;
