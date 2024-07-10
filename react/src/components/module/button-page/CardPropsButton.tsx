import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsButton = () => {
  const listItem = [
    {
      label: "variant",
      content: "The variant style of the button, e.g., 'solid-primary', 'link-primary'.",
    },
    {
      label: "size",
      content: "The size of the button, e.g., 'small', 'base', 'medium', 'large'.",
    },
    {
      label: "shape",
      content: "The shape of the button, e.g., 'rounded', 'circle'.",
    },
    {
      label: "isLoading",
      content: "Boolean flag to indicate whether the button is in a loading state.",
    },
    {
      label: "label",
      content: "The label or content displayed inside the button. Can be a string or ReactNode.",
    },
    {
      label: "className",
      content: "Additional CSS classes to apply to the button.",
    },
    {
      label: "disabled",
      content: "Boolean flag to disable the button.",
    },
    {
      label: "onClick",
      content: "Event handler for click events.",
    },
    {
      label: "customeElement",
      content: "Determines whether the button behaves as a button (`'button'`) or a link (`'link'`).",
    },
    {
      label: "to",
      content: "URL to navigate to if `customeElement` is `'link'`.",
    },
    {
      label: "target",
      content: "Specifies the target window or frame for the link if `customeElement` is `'link'`.",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsButton;
