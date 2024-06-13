
import CardSubMenu from "@components/cards/CardSubMenu";
import LinkCustome from "@components/ui/Link";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAlert = () => {
  const listAdditionalInfo = [
    {
      title: "Icons",
      caption: <p>
        For the icons used by the Alert component, you can find them in the <LinkCustome to="/docs/icons" className="hover:underline font-medium">here</LinkCustome>
      </p>
    },
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoAlert;
