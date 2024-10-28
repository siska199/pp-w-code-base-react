import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoCarousel = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
          <div>
            The carousel adjusts its display based on the screen size. 
            You can configure the number of items visible per view for small, medium, and large screens using the &apos;itemsPerView&apos; prop. The navigation buttons (&apos;IconChevronLeft&apos; and &apos;IconChevronRight&apos;) allow users to navigate between items. These buttons are automatically disabled when the user is at the beginning or end of the carousel.
            At the bottom of the carousel, there are indicators for each group of items. Clicking on these indicators allows users to jump to different groups of items in the carousel.
          </div>
      ),
  },
  {
    title: "Dependencies",
    caption: (
      <div>
        The Carousel component relies on several dependencies and utility functions imported from external sources (

        <Filename name="IconChevronRight" to="/docs/prerequisite/icon?name=IconChevronRight" />,
        <Filename name="IconChevronLeft" to="/docs/prerequisite/icon?name=IconChevronLeft" />,
        <Filename name="Button" to="/docs/components/button"/>,
        <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
        <Filename name="React" importFrom="react" />,
        <Filename name="useRef" importFrom="react" />,
        <Filename name="useEffect" importFrom="react" />, and
        <Filename name="useState" importFrom="react" />
        ). Ensure these dependencies are properly installed and imported for the component to function correctly.
      </div>
    ),
  },
  {
    title: "Variant",
    caption: (
        <div>
                This component does not have specific variants beyond the props configuration (`className` and `itemsPerView`).
        </div>
    ),
},
{
  title: "Usage Notes",
  caption: (
      <div>
          <p>
              It&apos;s recommended to wrap the &apos;CarouselImage&apos; component in a container with specified dimensions to control its display and responsiveness effectively.
          </p>
          <p>
              Handle the &apos;items&apos; prop carefully to ensure it contains the necessary React nodes for rendering. Unexpected types or empty arrays may lead to rendering issues.
          </p>
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

export default CardAdditionalInfoCarousel;
