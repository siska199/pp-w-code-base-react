
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageCopyText = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of CopyText:</p>
      <CodeBlock codeString={generateDisplayComponent('CopyText', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `return <CopyText text="Siska Apriana Rifianti the author of codebase199" />`;

export default CardUsageCopyText;
