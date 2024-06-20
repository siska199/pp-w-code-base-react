
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAvatar = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default variant of the avatar is &apos;soft-gray&apos;, the default size is &apos;base&apos;, and the default shape is &apos;circular&apos;.</p>
    },
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the Badge component can be seen{" "}
          <Button label="Here" customeElement={"link"} to="/docs/pre-requisite" />.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The Avatar component relies on several dependencies and utility functions imported from external sources (
          <span className="italic">@components/ui/Image</span>,{" "}
          <span className="italic">@lib/utils/helper</span>,{" "}
          <span className="italic">@lib/utils/variants/ui/variant-avatar</span>,{" "}
          <span className="italic">class-variance-authority</span>,{" "}
          <span className="italic">react</span>
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


export default CardAdditionalInfoAvatar;
