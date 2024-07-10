import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputCurrency = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <p>
          The <code>InputCurrency</code> component automatically formats the input value to include commas as thousand separators and ensures the value always has two decimal places.
        </p>
      ),
    },
    {
      title: "Variants",
      caption: (
        <p>
          The component supports different variants through the <code>variant</code> prop. If <code>variant</code> is set to &quot;v2&quot;, the placeholder text will be empty. For other variants, the placeholder text will default to the <code>attrs.placeholder</code> value.
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The InputCurrency The Alert component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />
          <Filename name="TBasePropsInput" to="/docs/prerequisite/types" />,
          <Filename name="React" importFrom="react" />,
          <Filename name="useRef" importFrom="react" />
          <Filename name="useEffect" importFrom="react" />
          , and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Controlled Component",
      caption: (
        <p>
          <code>InputCurrency</code> is a controlled component, meaning the input value is controlled by the <code>value</code> prop. Ensure that the <code>value</code> prop is updated correctly to reflect changes in the input field.
        </p>
      ),
    },
    {
      title: "Currency Formatting",
      caption: (
        <p>
          The <code>InputCurrency</code> component automatically formats input values as currency. It adds commas for thousands separators and ensures values are displayed with two decimal places.
        </p>
      ),
    },

    {
      title: "Handling User Input",
      caption: (
        <p>
          The component provides two event handlers: <code>onChange</code> and <code>onBlur</code>. Use <code>onChange</code> to handle input value changes with formatted updates, and <code>onBlur</code> to finalize the formatted value when the input field loses focus.
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputCurrency;
