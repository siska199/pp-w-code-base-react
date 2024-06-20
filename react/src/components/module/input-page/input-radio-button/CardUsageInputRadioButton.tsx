
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputRadioButton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputRadioButton:</p>
      <CodeBlock codeString={generateDisplayComponent('InputRadioButton', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputRadioButton`;

export default CardUsageInputRadioButton;
