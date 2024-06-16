
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Dropdown from "@components/ui/Dropdown";

const CardIntroDropdown = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Dropdown'}
      subTitle="Description of Dropdown."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Dropdown`;

export default CardIntroDropdown;
