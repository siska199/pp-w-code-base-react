import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoCopyText = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The CopyText component defaults to using the &rsquo;hsc&rsquo; variant for the &rsquo;Container&rsquo; component if no variant is provided. The component will handle copying text to the clipboard using the <span className="italic">navigator.clipboard</span> API if available, or a fallback
          method using a hidden textarea if not.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The CopyText component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconCheck" to="/docs/prerequisite/icon?name=IconCheck" />,
          <Filename name="IconClipboard" to="/docs/prerequisite/icon?name=IconClipboard" />,
          <Filename name="Container" to="/docs/prerequisite/helper-component?id=Container.tsx" />
          <Filename name="useEffect" importFrom="react" />,
          <Filename name="useState" importFrom="react" />, and
          <Filename name="Button" to="/docs/components/button" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Clipboard API",
      caption: (
        <p>
          The CopyText component utilizes the modern Clipboard API <span className="italic">(navigator.clipboard.writeText)</span> to copy text to the clipboard. If the Clipboard API is not supported by the browser, it falls back to using the older &quot;document.execCommand(&quot;copy&quot;)&quot;
          method.
        </p>
      ),
    },
    {
      title: "Copy Confirmation",
      caption: <p>When the text is successfully copied to the clipboard, the icon in the button changes to &lsquo;IconClipboard&lsquo; icon.</p>,
    },
    {
      title: "Event Handling",
      caption: <p>The component uses the useEffect hook to manage the state of the &apos;isCopied&apos; flag, ensuring that the visual feedback icon resets after 3 seconds.</p>,
    },
    {
      title: "Copy Text Without Showing the Text",
      caption: (
        <p>
          To copy text without displaying it, you can hide the text element using the <code>classText</code> prop. For example: <code>{`<CopyText classText='hidden' text="Copy this text without show it" />`}</code>
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoCopyText;
