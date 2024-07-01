
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoSkeleton = () => {
  const listAdditionalInfo = [
    {
      title: "Animation",
      caption: "The Skeleton component uses a pulse animation to indicate loading. This can be customized or disabled by modifying the CSS classes."
    },
    {
      title: "Customization",
      caption: "You can customize the appearance of the Skeleton by providing additional CSS classes through the `className` prop. The Skeleton will inherit these classes."
    },
    {
      title: "Timeout for Skeleton Calculation",
      caption: "The component uses a timeout of 600ms to calculate the dimensions and number of skeleton elements. This is to ensure that the content has enough time to render. You may need to adjust this value depending on your use case."
    },
    {
      title: "Handling Dynamic Content",
      caption: "If the content size changes dynamically, ensure that the `children` prop is updated accordingly to trigger recalculation of the skeleton dimensions."
    },
    {
      title: "Browser Compatibility",
      caption: "The component relies on `getComputedStyle` to determine the dimensions and styles of the content. Ensure that your target browsers support this method."
    },
    {
      title: "Fallback for Unsupported Browsers",
      caption: "For older or unsupported browsers, consider providing a fallback mechanism or static placeholder elements instead of relying solely on the Skeleton component."
    },
  ];
  

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoSkeleton;
