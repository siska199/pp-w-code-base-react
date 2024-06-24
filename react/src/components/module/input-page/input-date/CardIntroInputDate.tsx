
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroInputDate = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputDate'}
      subTitle="Description of InputDate."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputDate`;

export default CardIntroInputDate;
