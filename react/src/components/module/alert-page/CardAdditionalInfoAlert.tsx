
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAlert = () => {
  const listAdditionalInfo = [
    {
      title: "Variant Customization:",
      caption: (
        <p>
          The appearance of the alert can be customized using variants (
          <span className="italic">alertVariantError</span>, <span className="italic">alertVariantSuccess</span>,{" "}
          <span className="italic">alertVariantWarning</span>, <span className="italic">alertVariantGeneral</span>
          ). These variants determine the visual style and behavior based on the
          alert type (<span className="italic">error</span>, <span className="italic">success</span>, <span className="italic">warning</span>
          , <span className="italic">notification</span>, <span className="italic">info</span>).
        </p>
      ),
    },

    {
      title: "Automatic Dismissal:",
      caption: (
        <p>
          Alerts can automatically dismiss after a specified <span className="italic">timeout</span>{" "}
          period (default is 3000 milliseconds) if <span className="italic">autoClose</span> is
          enabled and a <span className="italic">handleOnDismiss</span> function is provided.
        </p>
      ),
    },
    {
      title: "Close Button:",
      caption: (
        <p>
          Users can optionally include a close button (<span className="italic">withCloseBtn</span>)
          in the alert, allowing users to manually dismiss it.
        </p>
      ),
    },
    {
      title: "Event Handling:",
      caption: (
        <p>
          The <span className="italic">onDismiss</span> prop allows users to specify a callback
          function that triggers when the alert is dismissed, either automatically
          or manually.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Alert component relies on several dependencies and utility
          functions imported from external sources (<span className="italic">@assets/icons</span>,{" "}
          <span className="italic">@lib/utils/data/variant-color</span>, <span className="italic">@lib/utils/helper</span>
          , <span className="italic">class-variance-authority</span>, <span className="italic">react</span>). Ensure these
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
