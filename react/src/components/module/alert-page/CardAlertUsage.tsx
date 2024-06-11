
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardAlertUsage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Alert:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Alert`;

export default CardAlertUsage;
