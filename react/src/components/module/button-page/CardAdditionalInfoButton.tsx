import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoButton = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default variant of the Button component is &apos;solid-primary&apos;, the default size is &apos;base&apos;, and the default shape is &apos;rounded&apos;. When the button is a link, the default variant changes to &apos;link-primary&apos;.</p>,
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Button component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconLoading" to="/docs/prerequisite/helper-component?id=IconLoading.tsx" />
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="cva" importFrom="class-variance-authority" />,
          <Filename name="VariantProps" importFrom="class-variance-authority" />
          <Filename name="variantButton" to="/docs/prerequisite/variant?id=variant-button.ts" />,
          <Filename name="HTMLProps" importFrom="react" />, and
          <Filename name="Link" importFrom="react-router-dom" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the Button component can be seen <Button to="/docs/prerequisite/variant?id=variant-button.ts" label="here" />.
        </p>
      ),
    },

    {
      title: "Component Link Behavior",
      caption: (
        <p>
          The <code>Button</code> component can act as a link by setting <code>customeElement=&quot;link&quot;</code> just by providing a <code>to</code> prop with the URL. It then it will renders as a <code>Link</code> component from React Router.
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoButton;
