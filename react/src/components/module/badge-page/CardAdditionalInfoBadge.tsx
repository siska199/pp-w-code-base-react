
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoBadge = () => {
  const listAdditionalInfo = [
    {
      title: "Variant",
      caption: (
        <p>
          The list of variants available for the Badge component can be seen{" "}
          <Button label="Here" customeElement={"link"} to="/docs/pre-requisite" className="hover:underline font-medium" />.
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
