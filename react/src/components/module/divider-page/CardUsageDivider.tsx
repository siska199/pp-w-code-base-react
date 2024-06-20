
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageDivider = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Divider:</p>
      <CodeBlock codeString={generateDisplayComponent('Divider', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Divider`;

export default CardUsageDivider;
