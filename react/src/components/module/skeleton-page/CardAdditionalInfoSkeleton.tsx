
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoSkeleton = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <div>
          The &apos;Skeleton&apos; component renders a placeholder that mimics the dimensions and appearance of the content to be loaded. If &apos;isLoading&apos; is &apos;true&apos;, it shows the Skeleton placeholder instead of the actual &apos;children&apos; content.
          The &apos;type&apos; prop determines whether the Skeleton is rendered as &apos;text&apos; (multiple lines) or &apos;block&apos; (single block). The dimensions (width and height) of the Skeleton are derived from the content&apos;s computed styles.
        </div>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Alert component relies on several dependencies and utility functions imported from external sources (
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="HTMLProps" importFrom="react" />,
          <Filename name="useRef" importFrom="react" />,
          <Filename name="useEffect" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Handling Dynamic Content",
      caption: <div>If the content size changes dynamically, ensure that the &apos;children&apos; prop is updated accordingly to trigger recalculation of the skeleton dimensions.</div>
    },

  ];
  
  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoSkeleton;
