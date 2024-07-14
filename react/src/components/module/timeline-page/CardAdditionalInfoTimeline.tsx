import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoTimeline = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: "By default, the Timeline component uses the 'v1' variant, displaying steps alternately on the left and right sides. If no custom class names or icons are provided, it uses the default styling and the `IconCalender` icon.",
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Tab component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconCalender" to="/docs/prerequisite/icon?name=IconCalender" />, and
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Variants",
      caption: (
        <div>
          The Timeline component supports the following variants, which determine the layout style:
          <List
            items={[
              {
                label: "v1",
                content: "Steps are displayed alternately on the left and right sides of the timeline.",
              },
              {
                label: "v2",
                content: "Steps are displayed in a single-column layout, without alternation.",
              },
            ]}
          />
        </div>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoTimeline;
