import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageDivider = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Divider:</p>
      <CodeBlock codeString={generateDisplayComponent("Divider", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `return <Divider text="Siska" variant={'center-aligned'} />`;

export default CardUsageDivider;
