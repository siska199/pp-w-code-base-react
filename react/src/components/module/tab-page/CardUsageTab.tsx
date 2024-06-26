
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTab = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Tab:</p>
      <CodeBlock codeString={generateDisplayComponent('Tab', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Tab`;

export default CardUsageTab;
