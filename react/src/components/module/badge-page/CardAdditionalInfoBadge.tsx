
import CardSubMenu from "@components/cards/CardSubMenu";
import LinkCustome from "@components/ui/Link";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoBadge = () => {
  const listAdditionalInfo = [
    {
      title: "Variant",
      caption: <p>
        The list of variants available for the Badge component can be seen <LinkCustome to="/docs/pre-requisite" className="hover:underline font-medium">here</LinkCustome>
      </p>
    },

  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoBadge;
