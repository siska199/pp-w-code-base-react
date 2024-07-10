import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputMultipleCheckbox = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <>By default, the component renders a group of checkboxes based on the provided &apos;options&apos; prop. It manages the state of selected checkboxes through the &apos;value&apos; prop.</>,
    },
    {
      title: "Variants",
      caption: <>Currently, the component does not support variants out of the box. However, you can customize the styling and behavior using the &apos;customeClassMulCheckbox&apos; and other props to create different visual and functional variants.</>,
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The InputMultipleCheckbox component relies on several dependencies and utility functions imported from external sources (
          <Filename name="Container" to="/docs/prerequisite/helper-component?id=Container.tsx" />,
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />,
          <Filename name="InputCheckbox" to="/docs/components/input/checkbox" />,
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="TCustomeEventOnChange" to="/docs/prerequisite/types" />,
          <Filename name="cn" importFrom="cn" />,
          <Filename name="arraysHaveSameMembers" to="/docs/prerequisite/helper-function?id=arraysHaveSameMembers" />,
          <Filename name="handlePreventDefault" to="/docs/prerequisite/helper-function?id=handlePreventDefault" />,
          <Filename name="useEffect" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Handling State for Multiple Checkboxes",
      caption: <>Ensure the state of each checkbox is managed properly through the &apos;value&apos; prop. This prop should be an array that contains the selected values. Use a state management solution like React&apos;s &apos;useState&apos; or a form library to handle state changes and updates.</>,
    },
    {
      title: "Select All Feature",
      caption: <>The &apos;withSelectAll&apos; prop adds a &apos;Select All&apos; option that lets users select or deselect all checkboxes at once. This feature can improve usability when dealing with a large number of options.</>,
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputMultipleCheckbox;
