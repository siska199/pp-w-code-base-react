
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAvatar = () => {
  const listAdditionalInfo = [
    {
      title: "Image",
      caption: <p>You can see the detail about component image in <Button customeElement={"link"} to="/" variant={"link-gray"} label="here" /></p>
    },
    {
      title: "Icon Placeholder",
      caption: <p>You can get the icon placeholder that display when user not provide src in <Button customeElement={"link"} to="/docs/icons" variant={"link-gray"} label="here" /></p>
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoAvatar;
