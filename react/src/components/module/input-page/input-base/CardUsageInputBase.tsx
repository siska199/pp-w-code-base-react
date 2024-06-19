
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputBase = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputBase:</p>
      <CodeBlock codeString={generateDisplayComponent('InputBase', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputBase`;

export default CardUsageInputBase;
