
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoTab = () => {
  const listAdditionalInfo = [
    {
      title: "Overview of Tabs Component",
      caption: "The `Tabs` component allows you to create tabbed navigation for organizing and displaying content. It supports both horizontal and vertical layouts."
    },
    {
      title: "Key Features of Tabs Component",
      caption: "Key features include:\n- Dynamic switching of content based on tab selection.\n- Customizable styles using CSS classes through the `customeClass` prop.\n- Supports two types of tabs: 'bordered' and 'pilled'.\n- Handles tab navigation efficiently with state management using React's `useState` and `useRef` for element references."
    }
  ];
  
  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoTab;
