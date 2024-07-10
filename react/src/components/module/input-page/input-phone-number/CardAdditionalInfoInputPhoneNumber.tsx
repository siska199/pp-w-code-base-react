import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

const CardAdditionalInfoInputPhoneNumber = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: <p>By default, the component does not allow the first character to be &quot;0&quot;. The input is formatted according to the specified pattern and includes a &quot;+62&quot; prefix.</p>,
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputPhoneNumber</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="useFormattedInput" to="/docs/prerequisite/hook?id=useFormattedInput" />, and
          <Filename name="React" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The <code>InputPercentage</code> component supports six variants: &apos;v1&apos;, &apos;v2&apos;, &apos;v3&apos;, &apos;v4&apos;, &apos;v5&apos;, and &apos;v6&apos;. The default variant is &apos;v1&apos;. If the &apos;variant&apos; prop is set to &apos;v2&apos;, the placeholder is set to
          an empty string. Otherwise, it uses the provided placeholder or an empty string. For example of each variant you can see in <Here to="/docs/components/input/base" />
        </p>
      ),
    },
    {
      title: "Phone Number Formatting",
      caption: <p>The component utilizes the useFormattedInput hook to format the input value according to the pattern specified in the formatPattern variable (&quot;XX-XXX-XXX-XXX&quot;).</p>,
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputPhoneNumber;
