import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageTimeline = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Timeline:</p>
      <CodeBlock codeString={generateDisplayComponent("Timeline", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "\n  const listStep = [...Array(5)]?.map((_, i) => ({\n    title: `Application UI code in Tailwind CSS ${ i + 1 } `,\n    subtitle: 'February 2022',\n    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'\n  }))\n  return <Timeline listStep={listStep} customeClass={{ containerContent: \"w-[12rem]\" }} />\n";

export default CardUsageTimeline;
