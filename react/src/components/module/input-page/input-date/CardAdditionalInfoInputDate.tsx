import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

const CardAdditionalInfoInputDate = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <div>The component&apos;s default behavior includes displaying a date picker with options for selecting a single date or a date range (if selectsRange is enabled). It starts with the current date as the default value.</div>,
    },
    {
      title: "Variants",
      caption: (
        <div>
          The <code>InputPercentage</code> component supports six variants: &apos;v1&apos;, &apos;v2&apos;, &apos;v3&apos;, &apos;v4&apos;, &apos;v5&apos;, and &apos;v6&apos;. The default variant is &apos;v1&apos;. Otherwise, it uses the provided placeholder or an empty string. For example of each
          variant you can see in <Here to="/docs/components/input/base" />
        </div>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The InputDate component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconCalender" to="/docs/prerequisite/icon?name=IconCalender" />,
          <Filename name="IconChevronLeft" to="/docs/prerequisite/icon?name=IconChevronLeft" />,
          <Filename name="IconChevronRight" to="/docs/prerequisite/icon?name=IconChevronRight" />,
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />,
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="TCustomeEventOnChange" to="/docs/prerequisite/types" />,
          <Filename name="clsx" importFrom="clsx" />,
          <Filename name="format" importFrom="date-fns" />,
          <Filename name="DatePicker" importFrom="react-datepicker" />,
          <Filename name="ReactDatePickerProps" importFrom="react-datepicker" />,
          <Filename name="react-datepicker/dist/react-datepicker.css" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Dynamic Display Modes",
      caption: "The component can dynamically switch between different date display modes (date, month, year) using internal state (showTypeDate). This allows users to select dates, months, or years based on the current mode.",
    },

    {
      title: "Selects Range",
      caption: "The component supports range selection when the selectsRange attribute is true. This allows users to select a start and end date for a date range.",
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputDate;
