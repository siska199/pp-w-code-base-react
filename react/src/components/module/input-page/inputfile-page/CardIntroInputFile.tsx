
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroInputFile = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Input File'}
      subTitle="Description of InputFile."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputFile`;

export default CardIntroInputFile;
