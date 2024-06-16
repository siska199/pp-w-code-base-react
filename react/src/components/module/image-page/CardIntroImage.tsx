
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroImage = () => {
  const listExample = [
    {
      component: <div className="flex gap-2">


      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Image'}
      subTitle="Description of Image."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Image`;

export default CardIntroImage;
