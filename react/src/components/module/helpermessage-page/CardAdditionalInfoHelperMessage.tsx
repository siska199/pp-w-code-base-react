
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoHelperMessage = () => {
  const listAdditionalInfo = [
    {
      title: "Styling with className",
      caption: `
        You can customize the visual style of the helper message by adding additional CSS classes through the \`className\` prop. This allows you to change text color, font size, or add other decorations as per your design needs.
        
        Example:
        \`\`\`jsx
        <HelperMessage message="Error message" variant="error" className="my-custom-class" />
        \`\`\`
      `
    },
    {
      title: "Using Different Variants",
      caption: `
        The \`variant\` prop allows you to specify different visual styles for the helper message based on the type of message you want to convey. Choose from \`error\`, \`success\`, or \`warning\` depending on your application context.
        
        Example:
        \`\`\`jsx
        <HelperMessage message="Success message" variant="success" />
        \`\`\`
      `
    },
    {
      title: "Adding Additional HTML Attributes",
      caption: `
        The \`...attrs\` prop allows you to add additional HTML attributes to the underlying <p> element. This can be useful for adding an id, style, or other attributes based on your application requirements.
        
        Example:
        \`\`\`jsx
        <HelperMessage message="Warning message" variant="warning" style={{ marginTop: '10px' }} />
        \`\`\`
      `
    }
  ];



  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoHelperMessage;
