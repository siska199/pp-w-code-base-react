
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

const displayUsage = `// Usage example for Timeline`;

export default CardUsageTimeline;
