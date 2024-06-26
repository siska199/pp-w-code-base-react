
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageModal = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Modal:</p>
      <CodeBlock codeString={generateDisplayComponent('Modal', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Modal`;

export default CardUsageModal;
