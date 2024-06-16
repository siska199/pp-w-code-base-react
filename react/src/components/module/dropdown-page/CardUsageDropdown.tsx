
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageDropdown = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Dropdown:</p>
      <CodeBlock codeString={generateDisplayComponent('Dropdown', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Dropdown`;

export default CardUsageDropdown;
