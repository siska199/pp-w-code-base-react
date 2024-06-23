
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputNPWP = () => {
  const listAdditionalInfo = [
    {
      title: "Formatting Pattern",
      caption: "The component enforces a specific format pattern for NPWP inputs, which is 'XX.XXX.XXX.X-XXX.XXX'. This format ensures consistency and validation of NPWP numbers."
    },
    {
      title: "Value Prop",
      caption: "The `value` prop should be a string representing the current value of the NPWP input. Changes to this prop will update the displayed value, formatted according to the specified pattern."
    },
    {
      title: "onChange Handler",
      caption: "The `onChange` prop is a required callback function that handles changes to the input value. It receives a `React.ChangeEvent<HTMLInputElement>` as its parameter."
    },
    {
      title: "Placeholder",
      caption: "When the `variant` prop is not 'v2', a placeholder 'XX.XXX.XXX.X-XXX.XXX' is displayed in the input field to indicate the expected format."
    },
    {
      title: "ContainerInput Usage",
      caption: <>The component is wrapped in <code>ContainerInput</code> to encapsulate common input functionalities such as styling and clearing.</>
    }
  ];
  

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputNPWP;
