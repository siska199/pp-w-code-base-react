import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoTooltip = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          By default, the tooltip appears when hovering over the child element. The position of the tooltip is determined by the <code>variant</code> prop, which can be &quot;top&quot;, &quot;bottom&quot;, &quot;left&quot;, or &quot;right&quot;. If no variant is specified, the tooltip defaults to
          appearing at the top of the child element.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Tooltip component relies on several dependencies and utility functions imported from external sources (
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
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
