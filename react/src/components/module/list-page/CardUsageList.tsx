
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageList = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of List:</p>
      <CodeBlock codeString={generateDisplayComponent('List', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for List`;

export default CardUsageList;
