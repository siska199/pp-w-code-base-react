
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardButtonAdditionalInfo = () => {
  const listAdditionalInfo = [
    {
      title: "Variant",
      caption: <p>
        The list of variants available for the Button component can be seen <Button customeElement={"link"} to="/docs/prerequisite/variant#button" variant={"link-gray"} label="here" />.
      </p>
    },
    {
      title: "Icon Loading",
      caption: <p>
        For the icons loading used by component Button, you can find it in the <Button customeElement={"link"} to="/docs/prerequisite/icon" variant={"link-gray"} label="here" />
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


export default CardButtonAdditionalInfo;
