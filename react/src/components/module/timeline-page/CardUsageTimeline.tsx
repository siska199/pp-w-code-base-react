
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTimeline = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Timeline:</p>
      <CodeBlock codeString={generateDisplayComponent('Timeline', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const listStep = [...Array(5)]?.map((_, i) => ({
    title: \`Application UI code in Tailwind CSS \${ i + 1 } \`,
    subtitle: 'February 2022',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'
  }))
  return <Timeline listStep={listStep} customeClass={{ containerContent: "w-[12rem]" }} />
`;

export default CardUsageTimeline;
