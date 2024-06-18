
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageCard = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Card:</p>
      <CodeBlock codeString={generateDisplayComponent('Card', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Card`;

export default CardUsageCard;
