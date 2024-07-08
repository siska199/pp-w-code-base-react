
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsCarousel = () => {
  const listItem = [
    {
      label: "items",
      content: "An array of React nodes representing the items to be displayed in the carousel."
    },
    {
      label: "className",
      content: "An optional string to add custom classes to the carousel container."
    },
    {
      label: "itemsPerView",
      content: "An optional object specifying the number of items to display per view for different screen sizes. The keys can be 'sm', 'md', and 'lg', representing small, medium, and large screens, respectively. The values are the number of items to display on each screen size."
    }
  ];

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsCarousel;
