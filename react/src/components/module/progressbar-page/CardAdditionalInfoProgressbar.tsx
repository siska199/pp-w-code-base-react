
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoProgressbar = () => {
  const listAdditionalInfo =  [
    {
        title: "Dependencies",
        caption: (
            <p>
              The Progressbar component relies on several dependencies and utility functions imported from external sources (
              <Filename name="cn" importFrom="cn" />, and
              
              ). Ensure these dependencies are properly installed and imported for the component to function correctly.
            </p>
          ),
    },
    {
        title: "Functionality",
        caption: (
            <p>
                <strong>Percentage Calculation:</strong> The component calculates the percentage filled based on the <code>value</code> and <code>valueTotal</code> props.<br/>
                <strong>Dynamic Label (<code>labelComp</code>):</strong> Depending on the <code>variant</code> prop, a label is dynamically rendered. For &quot;top-floating-label&quot; or &quot;bottom-floating-label&quot; variants, a <code>Badge</code> component may be displayed alongside the percentage value.
            </p>
        )
    },
    {
        title: "Styling and Customization",
        caption: (
            <p>
                Users can customize the appearance of the progress bar by passing custom CSS classes through the <code>customeClass</code> prop. The component uses Tailwind CSS utility classes for responsiveness and adaptability across different screen sizes.
            </p>
        )
    },
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoProgressbar;
