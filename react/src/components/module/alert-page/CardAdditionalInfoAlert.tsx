import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoAlert = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default type of the alert is &apos;info&apos;, the default variant is &apos;solid-white&apos;, the alert is fixed by default, auto-closes by default, and the default position is &apos;top-right&apos;.</p>,
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The Alert component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconClose" to="/docs/prerequisite/icon?name=IconClose" />,
          <Filename name="IconDanger" to="/docs/prerequisite/icon?name=IconDanger" />,
          <Filename name="IconInfo" to="/docs/prerequisite/icon?name=IconInfo" />,
          <Filename name="IconNotification" to="/docs/prerequisite/icon?name=IconNotification" />,
          <Filename name="IconSuccess" to="/docs/prerequisite/icon?name=IconSuccess" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="variantsAlert, variantAlertError, variantAlertSuccess, variantAlertWarning" to="/docs/prerequisite/variant?id=variant-alert.ts" />,
          <Filename name="variant" to="/docs/prerequisite/variant?id=variant-color.ts" />,
          <Filename name="cva" importFrom="class-variance-authority" />,
          <Filename name="VariantProps" importFrom="class-variance-authority" />,
          <Filename name="HTMLProps" importFrom="react" />,
          <Filename name="useEffect" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The appearance of the alert can be customized using variants (<span className="italic">alertVariantError</span>, <span className="italic">alertVariantSuccess</span>, <span className="italic">alertVariantWarning</span>, <span className="italic">alertVariantGeneral</span>
          ). These variants determine the visual style and behavior based on the alert type (<span className="italic">error</span>, <span className="italic">success</span>, <span className="italic">warning</span>, <span className="italic">notification</span>, <span className="italic">info</span>).
          <p>
            The list of variants available for the Alert component can be seen <Button label="here" to="/docs/prerequisite/variant?id=variant-alert.ts" />.
          </p>
        </p>
      ),
    },
    {
      title: "Automatic Dismissal",
      caption: (
        <p>
          Alerts can automatically dismiss after a specified <span className="italic">timeout</span> period (default is 3000 milliseconds) if <span className="italic">autoClose</span> is enabled and a <span className="italic">handleOnDismiss</span> function is provided.
        </p>
      ),
    },
    {
      title: "Close Button",
      caption: (
        <p>
          Users can optionally include a close button (<span className="italic">withCloseBtn</span>) in the alert, allowing users to manually dismiss it.
        </p>
      ),
    },
    {
      title: "Event Handling",
      caption: (
        <p>
          The <span className="italic">onDismiss</span> prop allows users to specify a callback function that triggers when the alert is dismissed, either automatically or manually.
        </p>
      ),
    },
    {
      title: "Icon Customization",
      caption: (
        <p>
          The <span className="italic">customeIcon</span> prop allows users to provide a custom icon for the alert. If not provided, the component will display a default icon based on the alert type.
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

export default CardAdditionalInfoAlert;
