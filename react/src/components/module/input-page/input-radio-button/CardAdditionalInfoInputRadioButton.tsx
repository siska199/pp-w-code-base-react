import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputRadioButton = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <>By default, the component renders a group of radio buttons based on the provided &apos;options&apos; prop. It manages the state of the selected radio button through the &apos;value&apos; prop.</>,
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The InputBase component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />, ). Ensure these dependencies are properly installed and imported for the component to function correctly.
          <Filename name="Container" to="/docs/prerequisite/helper-component?id=Container.tsx" />, ). Ensure these dependencies are properly installed and imported for the component to function correctly.
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />, and
          <Filename name="clsx" importFrom="clsx" />
        </div>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputRadioButton;
