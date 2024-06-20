
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent('InputCheckbox', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputCheckbox`;

export default CardUsageInputCheckbox;
