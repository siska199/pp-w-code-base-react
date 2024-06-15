
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import { TItemList } from "@types";

const CardPropsAlert = () => {
  const listItem: TItemList[] = [
    {
      label: "variant",
      content: "Specifies the appearance variant of the alert based on its type (`error`, `success`, `warning`, `notification`, `info`)."
    },
    {
      label: "customeIcon (optional)",
      content: "Custom icon element to display instead of the default icon based on the alert type."
    },
    {
      label: "type",
      content: "Determines the type of alert. Accepts `'error'`, `'success'`, `'warning'`, `'notification'`, or `'info'`."
    },
    {
      label: "withIcon (optional)",
      content: "If true, displays an icon associated with the alert type (`IconInfo`, `IconDanger`, `IconSuccess`, `IconNotification`, `IconClose`)."
    },
    {
      label: "show",
      content: "Indicates whether the alert is currently visible."
    },
    {
      label: "message",
      content: "Content to be displayed inside the alert, either as a string or a React node."
    },
    {
      label: "position (optional)",
      content: "Specifies the position of the alert on the screen. Accepts `'top-left'` or `'top-right'`."
    },
    {
      label: "timeout (optional)",
      content: "Duration in milliseconds after which the alert automatically dismisses. Default is 3000."
    },
    {
      label: "onDismiss (optional)",
      content: "Callback function called when the alert is dismissed."
    },
    {
      label: "autoClose (optional)",
      content: "If true, the alert automatically dismisses after the specified timeout. Default is true."
    },
    {
      label: "isFixed (optional)",
      content: "Determines whether the alert is fixed in position or scrolls with the page. Default is true."
    },
    {
      label: "className (optional)",
      content: "Additional CSS classes to be applied to the alert container."
    }
  ]



  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsAlert;
