
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsDropdown = () => {
  const listItem = [
    {
      label: "label",
      content: "The content or label that will be displayed on the dropdown button. It can be a React node or a string."
    },
    {
      label: "options",
      content: "An array of options to be displayed in the dropdown menu. Each option is an object that extends TOption and can have additional properties like className and title."
    },
    {
      label: "onClick",
      content: "A callback function that is triggered when an option is clicked. It receives the clicked option as an argument."
    },
    {
      label: "customeClass",
      content: "An optional object for custom CSS class names. It includes containerDropdown for the container's custom class and btnDropdown for the button's custom class."
    },
    {
      label: "isDefaultStyle",
      content: "A boolean to toggle the default styling of the dropdown button. If true, default styles are applied. Defaults to true."
    },
    {
      label: "header",
      content: "An optional React node to be displayed at the top of the dropdown menu, useful for adding a header or additional information."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsDropdown;
