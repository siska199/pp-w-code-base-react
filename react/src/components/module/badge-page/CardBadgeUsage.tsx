
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardBadgeUsage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Badge:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Badge`;

export default CardBadgeUsage;
