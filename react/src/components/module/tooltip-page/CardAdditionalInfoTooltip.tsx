
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoTooltip = () => {
  const listAdditionalInfo = [
    {
      title: "CSS Customization",
      caption: <p>The component uses several custom CSS classes for styling. These classes are likely defined in an external CSS file (tooltip.css), which customizes the appearance of the tooltip and its elements. You can see the css file that contain cusmte styling that use by component InputDate in <Button label={"here"} to={"/"} /></p>
    },

  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoTooltip;
