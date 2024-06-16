
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageImage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Image:</p>
      <CodeBlock codeString={generateDisplayComponent('Image', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Image`;

export default CardUsageImage;
