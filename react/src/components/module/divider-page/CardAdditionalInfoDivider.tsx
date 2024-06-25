
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoDivider = () => {
  const listAdditionalInfo =  [
    {
      title: "Default Behavior",
      caption: "The default behavior of the Divider component aligns text centrally with a 100% width, 1px height, and a gray text color."
    },
    {
      title: "Alignment Variants",
      caption: (
        <p>
          The Divider component supports three alignment variants: &apos;left-aligned&apos;, &apos;center-aligned&apos;, and &apos;right-aligned&apos;. These variants determine the positioning of the divider relative to the accompanying text.
        </p>
      )
    },
    {
      title: "Styling Customization",
      caption: (
        <p>
          Developers can customize the Divider component&apos;s appearance using props like &apos;width&apos;, &apos;height&apos;, and &apos;customeClass&apos;. Examples include adjusting dimensions and applying custom CSS classes to the text.
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



export default CardAdditionalInfoDivider;
