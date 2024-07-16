
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputFile = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputFile:</p>
      <CodeBlock codeString={generateDisplayComponent('InputFile', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for InputFile`;

export default CardUsageInputFile;
