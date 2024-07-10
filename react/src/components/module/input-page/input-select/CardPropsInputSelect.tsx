import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputSelect = () => {
  const listItem = [
    {
      label: "name",
      content: "The name attribute for the input element. It is required for form submission and identifying the input field in JavaScript.",
    },
    {
      label: "onChange",
      content: "A callback function invoked when the selected value(s) change. It receives an event object containing the updated value.",
    },
    {
      label: "options",
      content: "An array of objects representing the selectable options for the input. Each object typically has 'label' and 'value' properties.",
    },
    {
      label: "onLoadMore",
      content: "(Optional) A function called when scrolling reaches the bottom of the dropdown list, used for lazy loading additional options.",
    },
    {
      label: "isMultiple",
      content: "A boolean prop indicating whether the input allows multiple selections.",
    },
    {
      label: "value",
      content: "The current selected value(s) of the input. Can be a string for single select or an array of strings for multiple select.",
    },
    {
      label: "withSelectAll",
      content: "(Optional) A boolean prop applicable only when 'isMultiple' is true, enabling a 'Select All' option.",
    },

    {
      label: "customeElement",
      content: "Additional custom elements to be included within the input component, such as icons or other interactive elements.",
    },
    {
      label: "customeClass",
      content: "(Optional) Custom CSS classes to override or extend the default styling of the input component.",
    },
    {
      label: "HTMLProps",
      content: "It defines all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.",
    },
    {
      label: "Inherit all props that ContainerInput have",
      content: (
        <>
          To see all available props that ContainerInput have you can see in <Here to={`/docs/prerequisite/helper-component?id=container-input.tsx`} />{" "}
        </>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsInputSelect;
