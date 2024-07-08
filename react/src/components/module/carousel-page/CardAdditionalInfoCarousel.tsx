
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoCarousel = () => {
  const listAdditionalInfo = [
    {
      title: "Responsive Design",
      caption: "The carousel adjusts its display based on the screen size. You can configure the number of items visible per view for small, medium, and large screens using the `itemsPerView` prop."
    },
    {
      title: "Customization",
      caption: "You can customize the carousel appearance by providing a `className` prop to apply your own CSS styles to the carousel container."
    },
    {
      title: "Navigation Buttons",
      caption: "The carousel includes navigation buttons (`IconChevronLeft` and `IconChevronRight`) that allow users to navigate between items. These buttons are automatically disabled when the user is at the beginning or end of the carousel."
    },
    {
      title: "Group Indicator",
      caption: "At the bottom of the carousel, there are indicators for each group of items. Clicking on these indicators allows users to jump to different groups of items in the carousel."
    },
    {
      title: "Dynamic Resize Handling",
      caption: "The carousel adjusts its item width dynamically based on the container's size. It recalculates item sizes on window resize events to ensure items fit perfectly within the visible area."
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoCarousel;
