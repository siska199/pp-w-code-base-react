
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoModal = () => {
  const listAdditionalInfo = [
    {
      title: "Dependencies",
      caption: <p> To use the ContainerModal component, you need to import it along with its dependencies, including icons, styles, and utility functions.</p>
    },

    {
      title: "Styling Information",
      caption: <p>The component relies on the &apos;@assets/styles/ui/modal.css&apos; file for its styles. Ensure that this CSS file is correctly imported and included in your project. You can see the file <Button label="here" to="/" /> </p>
    },
    {
      title: "Variants",
      caption: <p>  The modalVariants function, created with the class-variance-authority library, allows you to apply different animation styles to the modal using the variant prop.</p>
    }
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoModal;
