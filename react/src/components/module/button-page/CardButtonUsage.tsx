
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardButtonUsage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Button:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Button`;

export default CardButtonUsage;
