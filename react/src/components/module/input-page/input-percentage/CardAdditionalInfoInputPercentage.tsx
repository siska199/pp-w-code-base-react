import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

const CardAdditionalInfoInputPercentage = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: "The default behavior ensures that the input value is formatted correctly as a percentage and prevents values outside the range of 0 to 100.",
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputPercentage</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="IconPercentage" to="/docs/prerequisite/icon?name=IconPercentage" />, and
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
      title: "Formatting Percentage",
      caption: "The input value is automatically formatted to ensure it remains a valid percentage between 0 and 100. It strips any non-numeric characters, allows only a single decimal point, and restricts the value to two decimal places.",
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputPercentage;
