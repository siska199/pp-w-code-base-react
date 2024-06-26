
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageProgressStep = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of ProgressStep:</p>
      <CodeBlock codeString={generateDisplayComponent('ProgressStep', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for ProgressStep`;

export default CardUsageProgressStep;
