import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

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
          The <code>InputNPWP</code> component supports six variants: &apos;v1&apos;, &apos;v2&apos;, &apos;v3&apos;, &apos;v4&apos;, &apos;v5&apos;, and &apos;v6&apos;. The default variant is &apos;v1&apos;. If the &apos;variant&apos; prop is set to &apos;v2&apos;, the placeholder is set to an
          empty string. Otherwise, it uses the provided placeholder or an empty string. For example of each variant you can see in <Here to="/docs/components/input/base" />
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
