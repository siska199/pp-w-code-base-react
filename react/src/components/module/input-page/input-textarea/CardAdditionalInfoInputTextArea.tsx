
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputTextArea = () => {
  const listAdditionalInfo = [
    {
      title: "Custom Styling",
      caption: "Use the `customeClass` prop to apply custom styles to the textarea container. This allows for flexibility in styling and aligning the component with your application's design system."
    },
    {
      title: "Variant Support",
      caption: "The component supports different variants (`v1` until `v5`) that can change its appearance. Ensure to set the `variant` prop accordingly to apply specific styles or behaviors."
    },
    {
      title: "Event Handling",
      caption: "The `onChange` prop is used to handle changes in the textarea's content. Ensure that the `onChange` handler updates the state or performs any necessary actions when the textarea content changes."
    },
    {
      title: "Placeholder Management",
      caption: "Use the `placeholder` prop to display instructional text within the textarea. Adjust the placeholder text based on the `variant` prop to provide context-specific guidance."
    },
    {
      title: "Accessibility Considerations",
      caption: "Ensure that the textarea has appropriate attributes and labels for accessibility. Use `aria-label` or `aria-labelledby` to describe the textarea's purpose when necessary."
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputTextArea;
