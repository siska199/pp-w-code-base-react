
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputSelect = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputSelect:</p>
      <CodeBlock codeString={generateDisplayComponent('InputSelect', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputSelect`;

export default CardUsageInputSelect;
