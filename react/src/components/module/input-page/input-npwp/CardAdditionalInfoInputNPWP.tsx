import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputNPWP = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <p>
          The <code>InputNPWP</code> component automatically formats the input value based on the NPWP format pattern. It also manages cursor positioning to ensure a smooth user experience during input.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputNPWP</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="useFormattedInput" to="/docs/prerequisite/hook?id=useFormattedInput" />, , and
          <Filename name="React" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The <code>variant</code> prop can be used to control the placeholder behavior. If the variant is set to &apos;v2&apos;, the placeholder will be empty. For other variants, the default placeholder &apos;XX.XXX.XXX.X-XXX.XXX&apos; will be displayed.
        </p>
      ),
    },
    {
      title: "Controlled Component",
      caption: (
        <p>
          <code>InputNPWP</code> is a controlled component, meaning the input value is controlled by the <code>value</code> prop. Ensure that the <code>value</code> prop is updated correctly to reflect changes in the input field.
        </p>
      ),
    },
    {
      title: "NPWP Formatting",
      caption: "The component enforces a specific format pattern for NPWP inputs, which is 'XX.XXX.XXX.X-XXX.XXX'. This format ensures consistency and validation of NPWP numbers.",
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputNPWP;
