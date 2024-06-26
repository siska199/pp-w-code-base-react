
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTable = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Table:</p>
      <CodeBlock codeString={generateDisplayComponent('Table', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Table`;

export default CardUsageTable;
