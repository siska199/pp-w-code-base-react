
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsSkeleton = () => {
  const listItem = [
    {
      label: "children",
      content: "The content that the Skeleton component will wrap around. This is the actual content that will be loaded eventually."
    },
    {
      label: "isLoading",
      content: "A boolean that determines whether the Skeleton should be displayed. If true, the Skeleton placeholder is shown instead of the children content."
    },
    {
      label: "type",
      content: "Defines the type of Skeleton to display. Can be either 'text' for text placeholders or 'block' for block elements."
    },
    {
      label: "width",
      content: "Specifies the width of the Skeleton. Can be a number or a string."
    },
    {
      label: "height",
      content: "Specifies the height of the Skeleton. Can be a number or a string."
    },
    {
      label: "totalSkeleton",
      content: "The total number of Skeleton elements to display. This is calculated based on the content when type is 'text' and is set to 1 when type is 'block'."
    },
    {
      label: "className",
      content: "Additional CSS classes to apply to the Skeleton wrapper."
    },
    {
      label: "...otherProps",
      content: "Any additional props to be passed down to the outer div element."
    }
  ];
  

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsSkeleton;
