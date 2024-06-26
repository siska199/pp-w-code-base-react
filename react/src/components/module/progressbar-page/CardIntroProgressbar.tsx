
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Progressbar from "@components/ui/Progressbar";

const CardIntroProgressbar = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Progressbar'}
      subTitle="Description of Progressbar."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Progressbar`;

export default CardIntroProgressbar;
