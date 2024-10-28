
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsModal = () => {
  const listItem = [
    {
      label: "isShow",
      content: "Controls the visibility of the modal. When true, the modal is shown; when false, it is hidden."
    },
    {
      label: "customeClass",
      content: "Object containing custom CSS classes to apply to specific elements within the modal."
    },
    {
      label: "customeClass.mdContent",
      content: "Custom CSS class for styling the main content area (`md-content`) of the modal."
    },
    {
      label: "className",
      content: "Additional CSS class names to apply to the root modal container (`md-modal`)."
    },
    {
      label: "onClose",
      content: "Callback function invoked when the modal is closed, typically triggered by clicking the close button."
    },
    {
      label: "children",
      content: "Content to be rendered inside the modal, typically components or elements."
    },
    {
      label: "variant",
      content: "Specifies the visual variant or animation style of the modal. Supported variants include 'fadein-scaleup', 'slide-from-right', and 'drawer'."
    }
  ];
  

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsModal;
