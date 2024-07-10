import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputCheckbox = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <>The component defaults to an unchecked state unless the &apos;checked&apos; prop is explicitly set to true or the value is true as boolean or &apos;true&apos; (string).</>,
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The InputBase component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconCheck" to="/docs/prerequisite/icon?name=IconCheck" />,
          <Filename name="Container" to="/docs/prerequisite/helper-component?id=Container.tsx" />, ). Ensure these dependencies are properly installed and imported for the component to function correctly.
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />, and
          <Filename name="useMemo" importFrom="react" />
        </div>
      ),
    },
    {
      title: "Single Checkbox Value",
      caption: (
        <>
          When using this component as a single checkbox, ensure that the &apos;value&apos; prop is either &apos;true&apos; or &apos;false&apos; (string type). This allows the component to correctly manage its checked state using the &apos;useMemo&apos; hook to determine if it should be checked or
          unchecked.
        </>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputCheckbox;
