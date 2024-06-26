
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputRadioButton = () => {
  const listAdditionalInfo = [
    {
      title: "Handling State for Radio Buttons",
      caption: "Ensure the state of the selected radio button is managed properly through the `value` prop. Use a state management solution like React's `useState` or a form library to handle state changes and updates."
    },
    {
      title: "Custom Styling",
      caption: "Use the `customeClassnameRadio` prop to apply custom styles to the radio button container and individual radio buttons. This allows for flexibility in styling and aligning the component with your application's design system."
    },
    {
      title: "Event Handling",
      caption: "The `onChange` prop should be used to handle changes to the radio button's value. Ensure that the `onChange` handler updates the state or performs any necessary actions when the radio button state changes."
    },
    {
      title: "Accessibility Considerations",
      caption: "Ensure that each radio button has a unique `id` and the corresponding label uses the `htmlFor` attribute to enhance accessibility. This helps screen readers correctly associate labels with their respective radio buttons."
    },
    {
      title: "Additional HTML Attributes",
      caption: "Use the `...attrsInput` spread operator to pass additional HTML attributes to the radio button input element. This can include attributes like `id`, `disabled`, `required`, and more, providing greater control and customization."
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputRadioButton;
