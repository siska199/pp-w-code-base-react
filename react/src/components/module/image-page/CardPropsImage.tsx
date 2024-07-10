import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsImage = () => {
  const listItem = [
    {
      label: "src",
      content: "The source URL of the image. If the URL does not include 'http', the getAssetURL helper function will be used to get the asset URL.",
    },
    {
      label: "alt",
      content: "The alt text for the image. If not provided, the src will be used with hyphens replaced by spaces.",
    },
    {
      label: "customeClassName",
      content: "An object containing custom class names:",
      childs: [
        {
          label: "container",
          content: "Class name for the image container.",
        },
        {
          label: "image",
          content: "Class name for the image element.",
        },
        {
          label: "containerOverlay",
          content: "Class name for the overlay container.",
        },
      ],
    },
    {
      label: "withSkeleton",
      content: "Boolean indicating whether to show a skeleton loader while the image is loading.",
    },
    {
      label: "timeoutLoadImage",
      content: "Number of milliseconds to wait before removing the loading state after the image has loaded.",
    },
    {
      label: "overlay",
      content: "An object containing overlay configuration:",
      childs: [
        {
          label: "isShowOnHover",
          content: "Boolean indicating whether the overlay should be displayed on hover.",
        },
        {
          label: "withBackdrop",
          content: "Boolean indicating whether to show a backdrop behind the overlay.",
        },
        {
          label: "content",
          content: "React node to be displayed as the overlay content.",
        },
      ],
    },
    {
      label: "...attrs",
      content: "Any other HTML props to be passed to the image element.",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsImage;
