
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoTimeline = () => {
  const listAdditionalInfo = [
    {
      title: "Additional Info 1",
      caption: ""
    },
    {
      title: "Additional Info 2",
      caption: ""
    },
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}



export default CardAdditionalInfoTimeline;
