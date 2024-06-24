
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputPhoneNumber = () => {
  const listAdditionalInfo = [
    {
      title: "Custom Input Formatting",
      caption: `The component utilizes the useFormattedInput hook to format the input value according to the pattern specified in the formatPattern variable ("XX-XXX-XXX-XXX").`
    },
    {
      title: "Custom Container Element",
      caption: `It includes a custom start element ("+62") within the ContainerInput component, enhancing the input field with additional context or visual cues.`
    },
    {
      title: "Dynamic Placeholder",
      caption: `The placeholder dynamically changes based on the variant prop. If variant is "v2", the placeholder is empty; otherwise, it displays the formatPattern ("XX-XXX-XXX-XXX").`
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputPhoneNumber;
