
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageCopyText = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of CopyText:</p>
      <CodeBlock codeString={generateDisplayComponent('CopyText', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for CopyText`;

export default CardUsageCopyText;
