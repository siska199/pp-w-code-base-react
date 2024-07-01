
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoProgressbar = () => {
  const listAdditionalInfo =  [
    {
        title: "Dependencies",
        caption: (
            <p>
                This component relies on the following dependencies:<code>cn</code> function from <code>@lib/utils/helper</code>,
                <code>Badge</code> component from <code>&ldquo;./Badge&ldquo;</code>
                Make sure these dependencies are installed and imported correctly in your project.
            </p>
        )
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
    {
        title: "Usage Examples",
        caption: (
            <p>
                Provide examples demonstrating how to use the <code>Progressbar</code> component with different props and variants. Showcase variations in appearance and behavior based on different combinations of props.
            </p>
        )
    },
    {
        title: "Performance Considerations",
        caption: (
            <p>
                Consider performance implications, such as animations or computations related to updating the progress bar&apos;s width or label.
            </p>
        )
    },
    {
        title: "Documentation and Support",
        caption: (
            <p>
                For comprehensive documentation, examples, or support, refer to the appropriate resources. Feel free to reach out for assistance or clarification as needed.
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

export default CardAdditionalInfoProgressbar;
