
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputDate = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputDate:</p>
      <CodeBlock codeString={generateDisplayComponent('InputDate', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputDate`;

export default CardUsageInputDate;
