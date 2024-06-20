
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsCard = () => {
  const listItem = [
    {
      label: "layout",
      content: 'Defines the layout of the card. Accepts "vertical" or "horizontal". Default is "vertical".'
    },
    {
      label: "variant",
      content: 'Specifies the card variant. Options are "top-bordered", "centered-body", or "overlay".'
    },
    {
      label: "imageOverlay",
      content: "URL of the image to be used as an overlay when the variant is set to 'overlay'."
    },
    {
      label: "header",
      content: "An object that contains the header properties: 'image' for the header image URL, and 'content' for the header content."
    },
    {
      label: "body",
      content: "An object that contains the body properties: 'title' for the body title, 'subtitle' for the body subtitle, 'image' for the body image URL, and 'content' for the body content."
    },
    {
      label: "footer",
      content: "Content to be displayed in the footer of the card."
    },
    {
      label: "link",
      content: "An object that contains link properties: 'label' for the link label, and 'to' for the URL the link points to."
    },
    {
      label: "customeClass",
      content: "An object to provide custom CSS classes for various parts of the card: 'imageOverlay', 'container', 'header', 'body', and 'footer'."
    },
    {
      label: "fit",
      content: 'Determines whether the card should fit its content. Accepts true or false. Default is true.'
    },
    {
      label: "className",
      content: "Additional class names to be added to the card component."
    },
    {
      label: "otherProps",
      content: "Any other HTML props that are valid for a div element."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsCard;
