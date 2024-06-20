
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputCurrency = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputCurrency:</p>
      <CodeBlock codeString={generateDisplayComponent('InputCurrency', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputCurrency`;

export default CardUsageInputCurrency;
