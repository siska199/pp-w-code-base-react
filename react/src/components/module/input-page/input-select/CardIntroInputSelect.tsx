
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputSelect from "@components/ui/InputSelect";

const CardIntroInputSelect = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputSelect'}
      subTitle="Description of InputSelect."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputSelect`;

export default CardIntroInputSelect;
