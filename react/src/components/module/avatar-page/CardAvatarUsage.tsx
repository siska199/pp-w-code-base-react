
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardAvatarUsage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Avatar:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Avatar`;

export default CardAvatarUsage;
