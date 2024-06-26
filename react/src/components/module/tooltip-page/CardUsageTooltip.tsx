
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTooltip = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Tooltip:</p>
      <CodeBlock codeString={generateDisplayComponent('Tooltip', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Tooltip`;

export default CardUsageTooltip;
