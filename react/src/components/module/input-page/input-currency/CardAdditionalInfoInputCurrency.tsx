import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

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
          The <code>InputPercentage</code> component supports six variants: &apos;v1&apos;, &apos;v2&apos;, &apos;v3&apos;, &apos;v4&apos;, &apos;v5&apos;, and &apos;v6&apos;. The default variant is &apos;v1&apos;. If the &apos;variant&apos; prop is set to &apos;v2&apos;, the placeholder is set to
          an empty string. Otherwise, it uses the provided placeholder or an empty string. For example of each variant you can see in <Here to="/docs/components/input/base" />
        </p>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The InputCurrency component relies on several dependencies and utility functions imported from external sources (
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />,
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
