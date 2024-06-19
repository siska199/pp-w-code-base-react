
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputTextArea = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputTextArea:</p>
      <CodeBlock codeString={generateDisplayComponent('InputTextArea', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputTextArea`;

export default CardUsageInputTextArea;
