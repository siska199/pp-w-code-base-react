
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardButtonIntro = () => {
  return (
    <CardIntroComponent
      title={'Button'}
      subTitle="Description of Button."
      listExample={[]}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Button`;

export default CardButtonIntro;
