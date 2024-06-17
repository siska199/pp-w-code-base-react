
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsImage = () => {
  const listItem = [
    {
      label: "src",
      content: "The URL of the image to be displayed. This prop is required. If the URL contains 'http', it is used directly. If the URL does not contain 'http', the `getAssetURL` function is used to generate the full URL based on the provided name. The `getAssetURL` function constructs the full path based on the given name."
    },
    {
      label: "alt",
      content: "Alternative text for the image. This is optional. If not provided, it defaults to the `src` with hyphens replaced by spaces. This is useful for accessibility and in case the image fails to load."
    },
    {
      label: "...attrs",
      content: "Any additional HTML image attributes that can be passed to the <img> element. These include standard attributes such as `width`, `height`, `className`, etc. These attributes will be applied directly to the <img> element."
    }
  ];

  return (
    <CardSubMenu title={'Props'} >
      <List items={listItem} />
    </CardSubMenu >
  );
}

export default CardPropsImage;
