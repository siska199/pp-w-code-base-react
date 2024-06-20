
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageCarousel = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Carousel:</p>
      <CodeBlock codeString={generateDisplayComponent('Carousel', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Carousel`;

export default CardUsageCarousel;
