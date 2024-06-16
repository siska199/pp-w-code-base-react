
import CardIntroComponent from "@components/cards/CardIntroComponent";
import HelperMessage from "@components/ui/HelperMessage";

const CardIntroHelperMessage = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'HelperMessage'}
      subTitle="Description of HelperMessage."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for HelperMessage`;

export default CardIntroHelperMessage;
