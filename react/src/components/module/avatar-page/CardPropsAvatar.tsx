
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsAvatar = () => {
  const listItem = [
    {
      label: "type",
      content: "Specifies the type of avatar to display. Accepts 'image' or 'alphabet'."
    },
    {
      label: "src (optional)",
      content: "The source URL for the image when the 'type' is set to 'image'. Defaults to 'avatar.svg' if not provided."
    },
    {
      label: "name",
      content: "Used for the alt text of the image and to display the first letter when the 'type' is 'alphabet'."
    },
    {
      label: "className (optional)",
      content: "Additional custom class names can be passed to the avatar component."
    },
    {
      label: "variant (optional)",
      content: "Determines the color variant of the avatar. Accepts 'solid-primary', 'solid-warning', 'solid-success', 'solid-error', 'solid-black', 'solid-white', 'soft-primary', 'soft-warning', 'soft-success', 'soft-error', 'soft-gray'."
    },
    {
      label: "sizeAvatar (optional)",
      content: "Sets the size of the avatar. Accepts 'tiny', 'small', 'base', 'large'."
    },
    {
      label: "shapeAvatar (optional)",
      content: "Determines the shape of the avatar. Accepts 'rounded' or 'circular'."
    },
    {
      label: "status (optional)",
      content: "Sets the status indicator on the avatar. Accepts 'none', 'offline', 'online', 'away', 'dont-distrub', 'icon'."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsAvatar;
