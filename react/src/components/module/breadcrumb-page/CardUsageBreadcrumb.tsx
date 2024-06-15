
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardUsageBreadcrumb = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Breadcrumb:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = `// Usage example for Breadcrumb`;

export default CardUsageBreadcrumb;
