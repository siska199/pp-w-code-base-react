
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import List from "@components/ui/List";

const CardPropsInputMultipleCheckbox = () => {
  const listItem = [
    {
      label: 'HTMLProps',
      content: 'These define all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.'
    },
    {
      label: 'Inherit all props that ContainerInput has',
      content: <>To see all available props that ContainerInput has, you can check them out <Button label="Here" to={`/docs/prerequisite/helper-component?id=container-input.tsx`} />.</>
    },
    {
      label: 'name',
      content: 'This prop specifies the name of the input element. It is used for identifying the form data after it is submitted to the server.'
    },
    {
      label: 'onChange',
      content: 'This function prop is called when the state of any checkbox changes. It receives a custom event containing the updated value of the checkboxes.'
    },
    {
      label: 'options',
      content: 'An array of objects where each object represents a checkbox option. Each object contains a label (displayed text) and a value (the unique identifier of the option).'
    },
    {
      label: 'value',
      content: 'This prop holds an array representing the currently selected values among the checkboxes. It manages the state of which checkboxes are checked.'
    },
    {
      label: 'customeClassMulCheckbox',
      content: 'This optional prop allows for customizing the styling of the checkbox container and individual checkboxes. It contains properties like `containerOption` and `containerCheckbox` for specific styling classes.'
    },
    {
      label: 'withSelectAll',
      content: 'An optional boolean prop that enables a "Select All" checkbox. When enabled, it provides a convenient way for users to select or deselect all checkboxes at once.'
    },
    {
      label: 'activeIndex',
      content: 'An optional prop that determines the active index of checkboxes. This can be used to highlight or manage focus on a specific checkbox.'
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsInputMultipleCheckbox;
