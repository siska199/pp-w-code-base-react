
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoTimeline = () => {
  const listAdditionalInfo = [
    {
      title: "Custom Styling",
      caption: "You can customize the styling of the timeline using the `customeClass` prop. This allows you to apply custom class names to different parts of the component, including the main container, each step container, content container, icon container, and line border."
    },
    {
      title: "Custom Icons",
      caption: "The `customeIcon` prop allows you to replace the default `IconCalender` with any custom icon. Simply pass your custom React node to this prop."
    },
    {
      title: "Responsive Layout",
      caption: "The `variant` prop allows you to choose between two layout styles: `v1` and `v2`. The `v1` variant arranges steps alternately on the left and right sides, while the `v2` variant arranges steps in a simplified, single-column layout."
    },
    {
      title: "Content Customization",
      caption: "Each step in the timeline can have a title, subtitle, and description. The subtitle is only displayed in the `v1` variant. These fields accept either strings or React nodes, allowing for flexible content customization."
    },
    {
      title: "Conditional Rendering",
      caption: "The `Content` function handles the conditional rendering of each step's content based on the variant and position. This ensures that the timeline adapts correctly to different layouts and customizations."
    },
    {
      title: "Usage",
      caption: "To use the `Timeline` component, provide the `listStep` prop with an array of step objects. Optionally, customize the appearance with the `customeClass` and `customeIcon` props, and choose the layout style with the `variant` prop."
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}



export default CardAdditionalInfoTimeline;
