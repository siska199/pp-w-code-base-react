
import CardIntroComponent from "@components/cards/CardIntroComponent";
import InputBase from "@components/ui/InputBase";

const CardIntroInputBase = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputBase'}
      subTitle="Description of InputBase."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputBase`;

export default CardIntroInputBase;
