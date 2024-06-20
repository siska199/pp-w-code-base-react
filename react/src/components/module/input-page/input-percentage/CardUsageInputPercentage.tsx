
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputPercentage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPercentage:</p>
      <CodeBlock codeString={generateDisplayComponent('InputPercentage', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputPercentage`;

export default CardUsageInputPercentage;
