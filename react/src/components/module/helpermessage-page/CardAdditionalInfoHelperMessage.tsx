import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoHelperMessage = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <p>
          The <code>CopyText</code> component displays a text and a button to copy that text to the clipboard. By default, the component&apos;s layout is horizontal start-center (<code>&quot;hsc&quot;</code>) if no layout prop is provided. When the copy button is clicked, the text is copied to the
          clipboard, and an icon indicating success is displayed for 3 seconds.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The HelperMessage component relies on several dependencies and utility functions imported from external sources (
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />, and <Filename name="HTMLProps" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variants",
      caption: (
        <p>
          The CopyTextcomponent accepts a <span className="italic">layout</span> prop to determine the alignment of the container. The possible values are:
          <ul className="list-disc ml-4">
            <li>
              <code>hbc</code>: Horizontal layout with space between content.
            </li>
            <li>
              <code>hsc</code>: Horizontal layout with start-center alignment (default).
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "Adding Additional HTML Attributes",
      caption: <>The &apos;...attrs&apos; prop allows you to add additional HTML attributes to the underlying {" <p> "}element. This can be useful for adding an id, style, or other attributes based on your application requirements.</>,
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoHelperMessage;
