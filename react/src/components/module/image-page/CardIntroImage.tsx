
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Image from "@components/ui/Image";

const CardIntroImage = () => {
  const listExample = [
    {
      component: <div>
        <Image src={"backgroundLogin1.svg"} className="min-w-screen min-h-screen" />


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
