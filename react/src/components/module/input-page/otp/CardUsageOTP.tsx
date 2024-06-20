
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageOTP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of OTP:</p>
      <CodeBlock codeString={generateDisplayComponent('OTP', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for OTP`;

export default CardUsageOTP;
