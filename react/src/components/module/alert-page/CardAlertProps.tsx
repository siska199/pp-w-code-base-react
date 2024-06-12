
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardAlertProps = () => {
  const listItem = [
    {
      label: "variant",
      content: "Specifies the type of alert, which determines its appearance and icon. Accepts 'info', 'warning', 'error', 'success', or 'notification'."
    },
    {
      label: "withCloseBtn (optional)",
      content: "If true, a close button is displayed in the alert."
    },
    {
      label: "position (optional)",
      content: "Specifies the position of the alert on the screen. Accepts 'top-left' or 'top-right'."
    },
    {
      label: "timeout (optional)",
      content: "The duration (in milliseconds) after which the alert automatically dismisses. Default is 3000."
    },
    {
      label: "onDismiss (optional)",
      content: "A callback function that is called when the alert is dismissed."
    },
    {
      label: "show",
      content: "Indicates whether the alert is visible or not."
    },
    {
      label: "autoClose (optional)",
      content: "If true, the alert will automatically dismiss after the specified timeout. Default is true."
    },
    {
      label: "isFixed (optional)",
      content: "Determines whether the alert is positioned fixed or static. Default is true."
    },
    {
      label: "className (optional)",
      content: "Additional CSS classes to be applied to the alert."
    },
    {
      label: "children",
      content: "The content to be displayed inside the alert."
    }
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardAlertProps;
