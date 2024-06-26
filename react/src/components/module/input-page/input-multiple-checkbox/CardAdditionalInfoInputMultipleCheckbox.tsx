
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputMultipleCheckbox = () => {
  const listAdditionalInfo =  [
    {
      title: "Handling State for Multiple Checkboxes",
      caption: "Ensure the state of each checkbox is managed properly through the `value` prop. This prop should be an array that contains the selected values. Use a state management solution like React's `useState` or a form library to handle state changes and updates."
    },
    {
      title: "Custom Styling",
      caption: "Use the `customeClassMulCheckbox` prop to apply custom styles to the checkbox container and individual checkboxes. This allows for flexibility in styling and aligning the component with your application's design system."
    },
    {
      title: "Select All Feature",
      caption: "The `withSelectAll` prop adds a 'Select All' option that lets users select or deselect all checkboxes at once. This feature can improve usability when dealing with a large number of options."
    },
    {
      title: "Event Handling",
      caption: "The `onChange` prop should be used to handle changes to the checkbox's value. Ensure that the `onChange` handler updates the state or performs any necessary actions when the checkbox state changes."
    },
    {
      title: "Additional HTML Attributes",
      caption: "Use the `...attrsInput` spread operator to pass additional HTML attributes to the checkbox input element. This can include attributes like `id`, `disabled`, `required`, and more, providing greater control and customization."
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputMultipleCheckbox;
