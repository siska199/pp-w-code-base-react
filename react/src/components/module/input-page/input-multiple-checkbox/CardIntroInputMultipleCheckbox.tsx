
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroInputMultipleCheckbox = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Input Multiple Checkbox'}
      subTitle="Description of InputMultipleCheckbox."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputMultipleCheckbox`;

export default CardIntroInputMultipleCheckbox;
