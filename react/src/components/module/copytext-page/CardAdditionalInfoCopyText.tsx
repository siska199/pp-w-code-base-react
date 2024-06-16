
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoCopyText = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The `CopyText` component defaults to using the &quot;hsc&quot; variant for the `Container` component if no variant is provided. The component will handle copying text to the clipboard using the `navigator.clipboard` API if available, or a fallback method using a hidden textarea if not.
        </p>
      )
    },
    {
      title: "Clipboard API",
      caption: (
        <p>
          The `CopyText` component utilizes the modern Clipboard API (`navigator.clipboard.writeText`) to copy text to the clipboard. If the Clipboard API is not supported by the browser, it falls back to using the older &quot;document.execCommand(&quot;copy&quot;)&quot; method.
        </p>
      )
    },
    {
      title: "Customizable Styles",
      caption: (
        <p>
          You can provide custom CSS classes for the container, text, and icon elements using the `classContainer`, `classText`, and `classIcon` props, respectively. This allows you to easily integrate the component into your application&quot;s design system.
        </p>
      )
    },
    {
      title: "Copy Confirmation",
      caption: (
        <p>
          When the text is successfully copied to the clipboard, the icon in the button changes to `IconCheck` for 3 seconds to provide visual feedback to the user. After 3 seconds, it reverts back to the `IconClipboard` icon.
        </p>
      )
    },
    {
      title: "Event Handling",
      caption: (
        <p>
          The component uses the `useEffect` hook to manage the state of the `isCopied` flag, ensuring that the visual feedback icon resets after 3 seconds.
        </p>
      )
    },
    {
      title: "Accessibility",
      caption: (
        <p>
          Ensure that the button label includes an accessible name for screen readers by providing appropriate aria-labels or additional descriptive text.
        </p>
      )
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoCopyText;
