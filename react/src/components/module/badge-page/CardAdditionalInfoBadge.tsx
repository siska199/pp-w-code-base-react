
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

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
          <Button label="here"  to="/docs/pre-requisite" />.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Badge component relies on several dependencies and utility functions imported from external sources (
          <span className="italic">@lib/utils/variants/variant-color</span>,{" "}
          <span className="italic">@lib/utils/helper</span>,{" "}
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


export default CardAdditionalInfoBadge;
