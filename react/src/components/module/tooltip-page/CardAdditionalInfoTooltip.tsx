import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoTooltip = () => {
  const listAdditionalInfo = [
    {
      title: "CSS Customization",
      caption: (
        <p>
          The component uses several custom CSS classes for styling. These classes are likely defined in an external CSS file (tooltip.css), which customizes the appearance of the tooltip and its elements. You can see the css file that contain cusmte styling that use by component InputDate in{" "}
          <Button label={"here"} to={"/"} />
        </p>
      ),
    },
    {
      title: "Tooltip Cut-off Issue",
      caption: (
        <p>
          When using the tooltip, sometimes its display is cut off due to the dimensions (width or height) of its parent container. This can happen when the parent container restricts the tooltip&apos;s visibility. To fix this issue, ensure that the parent container of the tooltip has{" "}
          <code>overflow: visible;</code> in its CSS styles. This allows the tooltip to display fully even if it extends beyond the dimensions of its parent container.
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoTooltip;
