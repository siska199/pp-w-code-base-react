
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoButton = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The default variant of the Button component is &apos;solid-primary&apos;, the default size is &apos;base&apos;, and the default shape is &apos;rounded&apos;. When the button is a link, the default variant changes to &apos;link-primary&apos;.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: <p>
        The list of variants available for the Button component can be seen <Button to="/docs/prerequisite/variant#button" label="here" />.
      </p>
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Button component relies on several dependencies and utility functions imported from external sources (
          <span className="italic">@assets/icons/IconLoading</span>,{" "}
          <span className="italic">@lib/utils/helper</span>,{" "}
          <span className="italic">@lib/utils/variants/variant-color</span>,{" "}
          <span className="italic">class-variance-authority</span>,{" "}
          <span className="italic">react</span>,{" "}
          <span className="italic">react-router-dom</span>
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Icon Loading",
      caption: <p>
        For the icons loading used by component Button, you can find it in the <Button to="/docs/prerequisite/icon" label="here" />
      </p>
    },
    {
      title: "Component Link Behavior",
      caption: <p>
        The <code>Button</code> component can act as a link by setting <code>customeElement=&quot;link&quot;</code> and providing a <code>to</code> prop with the URL. It then renders as a <code>Link</code> component from React Router.
      </p>
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoButton;
