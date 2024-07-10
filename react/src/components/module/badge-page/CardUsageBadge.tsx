import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageBadge = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Badge:</p>
      <CodeBlock codeString={generateDisplayComponent("Badge", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `<Badge label="SISKA" variant={"soft-warning"} sizeBadge={"small"} />`;

export default CardUsageBadge;
