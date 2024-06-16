
import CardIntroComponent from "@components/cards/CardIntroComponent";
import DropdownBase from "@components/ui/dropdown/DropdownBase";
import { TOption } from "@types";

const CardIntroDropdown = () => {
  const listOption = [
    {
      label: "Siska 1", value: "Siska"
    },
    {
      label: "Siska 2", value: "Siska"
    },
    {
      label: "Siska 3", value: "Siska"
    }
  ]
  const handleOnClick = (data: TOption) => {
    console.log("name: ", data)
  }
  const listExample = [
    {
      component: <div>
        <DropdownBase
          label={"Action"}
          options={listOption}
          onClick={handleOnClick}
        />
        <DropdownBase
          label={"Action"}
          options={listOption}
          onClick={handleOnClick}
        />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Dropdown'}
      subTitle="Description of Dropdown."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Dropdown`;

export default CardIntroDropdown;
