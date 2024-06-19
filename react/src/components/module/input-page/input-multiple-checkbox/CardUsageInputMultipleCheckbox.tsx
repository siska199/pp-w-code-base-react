
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputMultipleCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputMultipleCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent('InputMultipleCheckbox', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputMultipleCheckbox`;

export default CardUsageInputMultipleCheckbox;
