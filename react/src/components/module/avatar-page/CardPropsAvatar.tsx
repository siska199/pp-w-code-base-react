
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsAvatar = () => {
  const listItem = [
    {
      label: "type",
      content: "Specifies the type of avatar to display. Accepts 'image' or 'initial-name'."
    },
    {
      label: "src (required if type is 'image')",
      content: "The source URL for the image when the 'type' is set to 'image'. Defaults to 'avatar.svg' if not provided."
    },
    {
      label: "name",
      content: "Used for the alt text of the image and to display the first letter when the 'type' is 'initial-name'."
    },
    {
      label: "customeIcon (optional)",
      content: "Allows you to pass a custom icon that will be displayed when the 'status' is set to 'icon'."
    },
    {
      label: "className (optional)",
      content: "Additional custom class names can be passed to the avatar component."
    },
    {
      label: "variant (optional)",
      content: "Determines the color variant of the avatar. Accepts 'solid-primary', 'solid-warning', 'solid-success', 'solid-error', 'solid-black', 'solid-white', 'soft-primary', 'soft-warning', 'soft-success', 'soft-error', 'soft-gray'. Default is 'soft-gray'."
    },
    {
      label: "size (optional)",
      content: "Sets the size of the avatar. Accepts 'tiny', 'small', 'base', 'large'. Default is 'base'."
    },
    {
      label: "shape (optional)",
      content: "Determines the shape of the avatar. Accepts 'rounded' or 'circular'. Default is 'circular'."
    },
    {
      label: "status (optional)",
      content: "Sets the status indicator on the avatar. Accepts 'offline', 'online', 'away', 'dont-distrub', 'icon'."
    }
  ];



  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsAvatar;
