import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageSkeleton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Skeleton:</p>
      <CodeBlock codeString={generateDisplayComponent("Skeleton", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = '\n  return <Skeleton isLoading={true} type={"text"} >\n            <span className="">Lorem ipsum dolor corrupti quaerat distinctio, ex quas quo inventore cum? Molestiae hifssdicu isdjcisdhvo sdicsdoio iosdcoisdoic icusodcsdicjsodi.</span>\n          </Skeleton>';

export default CardUsageSkeleton;
