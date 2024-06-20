
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageBreadcrumb = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Breadcrumb:</p>
      <CodeBlock codeString={generateDisplayComponent("Breadcrumb", displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const listMenuNavbar = [
      {
          label: 'Docs',
          url: '/docs'
      },
      {
          label: 'Components',
          url: '/docs/components/accordion'
      },
      {
          label: 'Examples',
          url: '/docs/components/examples'
      },
      {
          label: 'Github',
          url: 'https://github.com/siska199/my-code-base-199'
      }
  ]
return <Breadcrumb items={listMenuNavbar} activeItem={0} />
`;

export default CardUsageBreadcrumb;
