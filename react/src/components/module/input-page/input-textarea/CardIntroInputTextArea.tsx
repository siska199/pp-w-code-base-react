
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroInputTextArea = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputTextArea'}
      subTitle="Description of InputTextArea."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputTextArea`;

export default CardIntroInputTextArea;
