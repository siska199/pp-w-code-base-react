
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoTab = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <div>
          The Tabs component defaults to a horizontal layout <span className="italic">(layout=&quot;horizontal&quot;) </span> and bordered tabs <span className="italic">(type=&quot;bordered&quot;)</span>. The first tab (&apos;listTab[0]&apos;) is active by default.
        </div>
      ),
    },
    {
      title: "Variant",
      caption: (
        <div>
          The Tabs component does not currently support variant handling through the `variant` prop or similar functionality.
        </div>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Tab component relies on several dependencies and utility functions imported from external sources (
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="TObject" to="/docs/prerequisite/types" />,
          <Filename name="TTab" to="/docs/prerequisite/types" />,
          <Filename name="useRef" importFrom="react" />,
          <Filename name="useEffect" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Overview of Tabs Component",
      caption: <div>The Tabs component allows you to create tabbed navigation for organizing and displaying content. It supports both horizontal and vertical layouts.</div>
    },

  ];
  
  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoTab;
