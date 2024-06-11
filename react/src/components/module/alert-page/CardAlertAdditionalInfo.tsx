
import CardSubMenu from "@components/cards/CardSubMenu";
import LinkCustome from "@components/ui/Link";
import ProgressStep from "@components/ui/ProgressStep";

const CardAlertAdditionalInfo = () => {
  const listAdditionalInfo = [
    {
      title: "Icons",
      caption: <div>
        For the icons used by the Alert component, you can find them in the <LinkCustome to="/docs/icons" className="hover:underline font-medium">Icons menu</LinkCustome>
      </div>
    },
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAlertAdditionalInfo;
