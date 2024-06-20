
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageButton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Button:</p>
      <CodeBlock codeString={generateDisplayComponent('Button', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `<>
    <Button variant={"solid-primary"} label={'Button'} />
    <Button customeElement={'link'} label={'Button'} to={"https://github.com/siska199/my-code-base-199"}  target="_blank"/>
</>`;

export default CardUsageButton;
