
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import { TItemList } from "@types";

const CardPropsAlert = () => {
  const listItem: TItemList[] = [
    {
      label: "variant",
      content: <>
        specifies the appearance variant of the alert based on its type (<span className="italic">error</span>, <span className="italic">success</span>, <span className="italic">warning</span>, <span className="italic">notification</span>, <span className="italic">info</span>).
      </>
    },
    {
      label: "customeIcon (optional)",
      content: <>Custom icon element to display instead of the default icon based on the alert type.</>
    },
    {
      label: "type",
      content: <>Determines the type of alert. Accepts <span className="italic">error</span>, <span className="italic">success</span>, <span className="italic">warning</span>, <span className="italic">notification</span>, <span className="italic">info</span>.</>
    },
    {
      label: "withIcon (optional)",
      content: <>
        If <span className="italic">true</span>, displays an icon associated with the alert type (<span className="italic">IconInfo</span>, <span className="italic">IconDanger</span>, <span className="italic">IconSuccess</span>, <span className="italic">IconNotification</span>, <span className="italic">IconClose</span>).
      </>
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
      content: <>
        Specifies the position of the alert on the screen. Accepts <span className="italic">top-left</span>, <span className="italic">top-right</span>, <span className="italic">bottom-left</span> or <span className="italic">bottom-right</span>.
      </>
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
