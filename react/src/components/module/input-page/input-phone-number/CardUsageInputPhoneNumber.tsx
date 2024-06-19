
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputPhoneNumber = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPhoneNumber:</p>
      <CodeBlock codeString={generateDisplayComponent('InputPhoneNumber', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputPhoneNumber`;

export default CardUsageInputPhoneNumber;
