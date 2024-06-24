
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoBreadcrumb = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The Breadcrumb component defaults to using icon dividers (Chevron Right), with an active item determined by the current URL path or the specified activeItem prop. It renders the items as links using the Button component.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the breadcrumb component can be seen{" "}
          <Button label="here" to="/docs/pre-requisite" />.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Breadcrumb component relies on several dependencies and utility functions imported from external sources (
          <span className="italic">@assets/icons</span>,{" "}
          <span className="italic">@lib/utils/helper</span>,{" "}
          <span className="italic">class-variance-authority</span>,{" "}
          <span className="italic">react</span>,{" "}
          <span className="italic">Button</span>
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


export default CardAdditionalInfoBreadcrumb;
