
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Modal from "@components/ui/Modal";

const CardIntroModal = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Modal'}
      subTitle="Description of Modal."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Modal`;

export default CardIntroModal;
