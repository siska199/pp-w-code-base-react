
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageAvatar = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Avatar:</p>
      <CodeBlock codeString={generateDisplayComponent('Avatar',displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `<Avatar type="alphabet" sizeAvatar={"tiny"} name="Siska" />`;

export default CardUsageAvatar;
