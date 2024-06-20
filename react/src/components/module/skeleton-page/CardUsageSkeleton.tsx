
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageSkeleton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Skeleton:</p>
      <CodeBlock codeString={generateDisplayComponent('Skeleton', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Skeleton`;

export default CardUsageSkeleton;
