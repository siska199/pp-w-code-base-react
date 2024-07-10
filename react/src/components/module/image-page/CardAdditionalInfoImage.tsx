import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoImage = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The Image component renders an image with customizable options such as <span className="italic">src</span>, <span className="italic">alt</span>, and <span className="italic">overlay</span>. It supports loading states with optional skeleton loaders <span>(withSkeleton)</span> and blur
          effects <span> (withLoadEffect)</span>. Custom CSS classes can be applied to the image container <span>(container)</span>, the image itself <span>(image)</span>, and the overlay container <span>(containerOverlay)</span>.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The Image component depends on
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />, (class name utility) and
          <Filename name="getAssetURL" to="/docs/prerequisite/helper-function?id=getAssetURL" />
          (helper function for getting asset URLs). It also uses React&apos;s
          <Filename name="useState" importFrom="react" />
          hook for managing loading states and effects.
        </p>
      ),
    },
    {
      title: "Loading State",
      caption: (
        <div>
          The component uses an internal loading state to apply a blur effect to the image while it is loading. This is managed by the &apos;isLoading&apos; state variable, which is set to &apos;false&apos; once the image has fully loaded. While the image is loading, a CSS class
          &apos;blur-effect&apos; is applied to give a visual indication that the image is not yet fully loaded. Once the image has loaded, the &apos;clear-effect&apos; class is applied to remove the blur.
        </div>
      ),
    },
    {
      title: "Skeleton Loader",
      caption: <p>If withSkeleton is true, a skeleton loader is displayed while the image is loading. This loader is animated with a pulse effect.</p>,
    },
    {
      title: "Asset URL",
      caption: <p>The getAssetURL function is used to generate the full URL of the image if the provided &apos;src&apos; does not include &apos;http&apos;. This function constructs the full path based on the given name.</p>,
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};
export default CardAdditionalInfoImage;
