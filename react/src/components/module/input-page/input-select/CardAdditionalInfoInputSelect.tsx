import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

const CardAdditionalInfoInputSelect = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>By default, the InputSelect component renders as a single-select dropdown with options provided in the &apos;options&apos; prop. It automatically selects the corresponding label when the &apos;value&apos; prop changes.</p>,
    },

    {
      title: "Variant",
      caption: (
        <p>
          The <code>InputPercentage</code> component supports six variants: &apos;v1&apos;, &apos;v2&apos;, &apos;v3&apos;, &apos;v4&apos;, &apos;v5&apos;, and &apos;v6&apos;. The default variant is &apos;v1&apos;. Otherwise, it uses the provided placeholder or an empty string. For example of each
          variant you can see in <Here to="/docs/components/input/base" />
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputPhoneSelect</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconClose" to="/docs/prerequisite/icon?name=IconClose" />,
          <Filename name="IconChevronToggle" to="/docs/prerequisite/helper-component?id=IconChevronToggle.tsx" />,
          <Filename name="Badge" to="/docs/components/badge" />,
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />,
          <Filename name="useOnClickOutside" to="/docs/prerequisite/hook?id=useOnClickOutside" />,
          <Filename name="debounce" to="/docs/prerequisite/helper-function?id=debounce" />,
          <Filename name="getFieldLabelFromOptions" to="/docs/prerequisite/helper-function?id=getFieldLabelFromOptions" />,
          <Filename name="isEmptyValue" to="/docs/prerequisite/helper-function?id=isEmptyValue" />,
          <Filename name="spreadArrayAttemp" to="/docs/prerequisite/helper-function?id=spreadArrayAttemp" />,
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="TCustomeEventOnChange" to="/docs/prerequisite/types" />,
          <Filename name=" TOption" to="/docs/prerequisite/types" />,
          <Filename name="clsx" importFrom="clsx" />,
          <Filename name="useEffect" importFrom="reat" />,
          <Filename name="useRef" importFrom="reat" />,
          <Filename name="useState" importFrom="reat" />,
          <Filename name="useFormattedInput" to="/docs/prerequisite/hook?id=useFormattedInput" />, and <Filename name="InputMultipleCheckbox" to="/docs/components/input/multiple-checkbox" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Search Functionality",
      caption: <p>InputSelect supports real-time search functionality. As you type in the input field, it filters the options based on the search query, updating the dropdown list dynamically.</p>,
    },
    {
      title: "Multiple Selection",
      caption: <p>When the &apos;isMultiple&apos; prop is set to true, the component allows for selecting multiple options. In this mode, it supports features like &apos;Select All&apos; and displays the selected values as badges.</p>,
    },
    {
      title: "Debouncing Search",
      caption: <p>The component uses a debounced function to handle search queries efficiently. This reduces the number of times the search function is called, improving performance when dealing with a large number of options.</p>,
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputSelect;
