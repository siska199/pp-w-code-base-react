
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroTimeline = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Timeline'}
      subTitle="Description of Timeline."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Timeline`;

export default CardIntroTimeline;
