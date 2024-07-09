
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputBase = () => {
  const listAdditionalInfo = [
    {
      title: "Dependencies",
      caption: (
        <p>
          The InputBase component relies on several dependencies and utility
          functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />
          ).
          Ensure these
          dependencies are properly installed and imported for the component to
          function correctly.
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


export default CardAdditionalInfoInputBase;
