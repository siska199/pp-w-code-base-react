import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";
import codeStringVariant from "@lib/utils/code-string/variant";

const VariantPage = () => {

  const listVariant = [
    {
      title: 'Base Variant Definitions',
      caption: <CodeBlock
        fileName="src/lib/utils/variants/variant-color.ts"
        codeString={codeStringVariant.variantColor}
      />
    },
    {
      title: 'Alert Variant',
      caption: <CodeBlock
        fileName="src/lib/utils/variants/ui/variant-alert.ts"
        codeString={codeStringVariant.variantAlert}
      />
    },
    {
      title: "Avatar Variant",
      caption: <CodeBlock
        fileName="src/lib/utils/variants/ui/variant-avatar.ts"
        codeString={codeStringVariant.variantAvatar}
      />
    },
    {
      title: "Badge Variant",
      caption: <CodeBlock
        fileName="src/lib/utils/variants/ui/variant-badge.ts"
        codeString={codeStringVariant?.variantBadge}
      />
    },
    {
      title: "Button Variant",
      caption: <CodeBlock
        fileName="src/lib/utils/variants/ui/variant-button.ts"
        codeString={codeStringVariant.variantButton}
      />
    }
  ]
  return (
    <>
      <CardIntro
        title={'Variant'}
        subTitle={'The provided code demonstrates a sophisticated approach to defining and managing design variants for various UI components such as Badge, Button, Alert, Avatar, and etc in a React application. These variants enable consistent styling across the application by using utility classes and predefined styles. Here’s an explanation of the key concepts and structure of the code:'}
      />
      <ProgressStep type="number" listStep={listVariant} variant="vertical" />

    </>
  );
};

export default VariantPage;