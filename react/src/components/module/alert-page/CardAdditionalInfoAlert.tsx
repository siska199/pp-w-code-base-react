
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAlert = () => {
  const listAdditionalInfo = [
    {
      title: "Variant Customization:",
      caption: (
        <p>
          The appearance of the alert can be customized using variants (
          <code>alertVariantError</code>, <code>alertVariantSuccess</code>,{" "}
          <code>alertVariantWarning</code>, <code>alertVariantGeneral</code>
          ). These variants determine the visual style and behavior based on the
          alert type (<code>error</code>, <code>success</code>, <code>warning</code>
          , <code>notification</code>, <code>info</code>).
        </p>
      ),
    },
    {
      title: "Custom Icons:",
      caption: (
        <p>
          The <code>customeIcon</code> prop allows users to replace the default
          icon associated with the alert type (
          <code>IconInfo</code>, <code>IconDanger</code>, <code>IconSuccess</code>
          , <code>IconNotification</code>) with a custom React node or component.
        </p>
      ),
    },
    {
      title: "Automatic Dismissal:",
      caption: (
        <p>
          Alerts can automatically dismiss after a specified <code>timeout</code>{" "}
          period (default is 3000 milliseconds) if <code>autoClose</code> is
          enabled and a <code>handleOnDismiss</code> function is provided.
        </p>
      ),
    },
    {
      title: "Close Button:",
      caption: (
        <p>
          Users can optionally include a close button (<code>withCloseBtn</code>)
          in the alert, allowing users to manually dismiss it.
        </p>
      ),
    },
    {
      title: "Positioning:",
      caption: (
        <p>
          Alerts can be positioned either at the &lsquo;<code>top-left</code>&lsquo; or &lsquo;
          <code>top-right</code>&lsquo; of the screen using the <code>position</code>{" "}
          prop.
        </p>
      ),
    },
    {
      title: "Fixed vs. Static Positioning:",
      caption: (
        <p>
          The <code>isFixed</code> prop determines whether the alert remains fixed
          in its position (<code>true</code>) or scrolls with the page (
          <code>false</code>). The default is <code>true</code> (fixed).
        </p>
      ),
    },
    {
      title: "Additional CSS Classes:",
      caption: (
        <p>
          Users can apply additional CSS classes (<code>className</code>) to further
          customize the alert&lsquo;s appearance or behavior.
        </p>
      ),
    },
    {
      title: "Event Handling:",
      caption: (
        <p>
          The <code>onDismiss</code> prop allows users to specify a callback
          function that triggers when the alert is dismissed, either automatically
          or manually.
        </p>
      ),
    },
    {
      title: "Conditional Rendering:",
      caption: (
        <p>
          Alerts are rendered conditionally based on the <code>show</code> prop. If{" "}
          <code>show</code> is <code>true</code>, the alert is displayed; otherwise,
          it remains hidden.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The <code>Alert</code> component relies on several dependencies and utility
          functions imported from external sources (<code>@assets/icons</code>,{" "}
          <code>@lib/utils/data/variant-color</code>, <code>@lib/utils/helper</code>
          , <code>class-variance-authority</code>, <code>react</code>). Ensure these
          dependencies are properly installed and imported for the component to
          function correctly.
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoAlert;
