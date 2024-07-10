import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputMultipleCheckbox = () => {
  const listItem = [
    {
      label: "HTMLProps",
      content: "These define all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.",
    },
    {
      label: "Inherit all props that ContainerInput has",
      content: (
        <>
          To see all available props that ContainerInput has, you can check them out <Here to={`/docs/prerequisite/helper-component?id=container-input.tsx`} />.
        </>
      ),
    },
    {
      label: "name",
      content: "This prop specifies the name of the input element. It is used for identifying the form data after it is submitted to the server.",
    },
    {
      label: "onChange",
      content: "This function prop is called when the state of any checkbox changes. It receives a custom event containing the updated value of the checkboxes.",
    },
    {
      label: "options",
      content: "An array of objects where each object represents a checkbox option. Each object contains a label (displayed text) and a value (the unique identifier of the option).",
    },
    {
      label: "value",
      content: "This prop holds an array representing the currently selected values among the checkboxes. It manages the state of which checkboxes are checked.",
    },
    {
      label: "customeClassMulCheckbox",
      content: "This optional prop allows for customizing the styling of the checkbox container and individual checkboxes. It contains properties like `containerOption` and `containerCheckbox` for specific styling classes.",
    },
    {
      label: "withSelectAll",
      content: 'An optional boolean prop that enables a "Select All" checkbox. When enabled, it provides a convenient way for users to select or deselect all checkboxes at once.',
    },
    {
      label: "activeIndex",
      content: "An optional prop that determines the active index of checkboxes. This can be used to highlight or manage focus on a specific checkbox.",
    },
    {
      label: "isCheckAll",
      content: "A state variable used to determine if all options are selected. It is managed internally within the component and updated via the useEffect hook when the value prop changes.",
    },
    {
      label: "handleOnChange",
      content: 'A function that handles the change event for each checkbox. It updates the selected values in the value array and manages the state of the "Select All" checkbox if applicable.',
    },
    {
      label: "Checkbox",
      content: 'A sub-component used to render each individual checkbox, including the "Select All" checkbox if enabled. It uses the InputCheckbox component for each option and passes the necessary props.',
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsInputMultipleCheckbox;
