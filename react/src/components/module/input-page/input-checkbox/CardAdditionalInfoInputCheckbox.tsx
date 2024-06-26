
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputCheckbox = () => {
  const listAdditionalInfo = [
    {
      title: "Handling Checkbox State",
      caption: "Ensure the state of the checkbox (checked or unchecked) is managed properly through the `checked` prop. Use a state management solution like React's `useState` or a form library to handle state changes and updates."
    },
    {
      title: "Custom Styling",
      caption: "Use the `customeClassnameCheckbox` prop to apply custom styles to the checkbox container. This allows for flexibility in styling and aligning the checkbox with your application's design system."
    },
    {
      title: "Label Accessibility",
      caption: "Always provide a meaningful label using the `label` prop for accessibility purposes. This helps screen readers to announce the purpose of the checkbox to users with visual impairments."
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


export default CardAdditionalInfoInputCheckbox;
