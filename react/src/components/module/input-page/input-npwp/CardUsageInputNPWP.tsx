
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputNPWP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputNPWP:</p>
      <CodeBlock codeString={generateDisplayComponent('InputNPWP', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputNPWP`;

export default CardUsageInputNPWP;
