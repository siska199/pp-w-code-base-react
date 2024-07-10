import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageAccordion = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example of usage component accordion:</p>
      <CodeBlock codeString={generateDisplayComponent("Accordion", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  'const listItemAccordion = [...Array(3)].map(() => ({\r\n    label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",\r\n    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\n        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\n        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\n        optio,`,\r\n  }));\r\n  return <Accordion items={listItems} />;';
export default CardUsageAccordion;
