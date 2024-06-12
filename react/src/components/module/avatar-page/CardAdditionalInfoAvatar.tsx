
import CardSubMenu from "@components/cards/CardSubMenu";
import LinkCustome from "@components/ui/Link";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAvatar = () => {
  const listAdditionalInfo = [
    {
      title: "Image",
      caption: <p>You can see the detail about component image in <LinkCustome to="/docs/components/image" className="hover:underline font-medium">Here</LinkCustome> </p>
    },
    {
      title: "Icon Placeholder",
      caption: <p>You can get the icon placeholder the display when user not provide src in <LinkCustome to="/docs/icons" className="hover:underline font-medium">Here</LinkCustome> </p>
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoAvatar;
