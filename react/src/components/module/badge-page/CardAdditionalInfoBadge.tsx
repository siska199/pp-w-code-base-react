
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoBadge = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default variant of the badge is &apos;soft-primary&apos;, the default size is &apos;base&apos;, and the default shape is &apos;pilled&apos;.</p>
    },
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the Badge component can be seen{" "}
          <Button label="here" to="/docs/prerequisite/variant?id=variant-badge.ts" />.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Badge component relies on several dependencies and utility functions imported from external sources (
          <Filename name="variantBadge" to="/docs/prerequisite/variant?id=variant-badge.ts" />
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="cva" importFrom="class-variance-authority" />,<Filename name="VariantProps" importFrom="class-variance-authority" />,
          <Filename name="React" importFrom="react"/>, and <Filename name="HTMLProps" importFrom="react"/>
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoBadge;
