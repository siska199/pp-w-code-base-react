
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Divider from "@components/ui/Divider";

const CardIntroDivider = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Divider'}
      subTitle="Description of Divider."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Divider`;

export default CardIntroDivider;
