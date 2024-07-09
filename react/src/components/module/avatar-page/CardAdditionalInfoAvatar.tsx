
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoAvatar = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default variant of the avatar is &apos;soft-gray&apos;, the default size is &apos;base&apos;, and the default shape is &apos;circular&apos;.</p>
    },
    {
      title: "Dependencies",
      caption: (

        <p>
          The Avatar component relies on several dependencies and utility functions imported from external sources (
          <Filename name="Image" to='/docs/components/image' />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="variantsAvatar" to="/docs/prerequisite/variant?id=variant-avatar.ts" />,
          <Filename name="cva" />,<Filename name="VariantProps" />,
          and  <Filename name="HTMLProps" />). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p >

      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the Badge component can be seen{" "}
          <Button label="here" to="/docs/prerequisite/variant?id=variant-avatar.ts" />.
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


export default CardAdditionalInfoAvatar;
