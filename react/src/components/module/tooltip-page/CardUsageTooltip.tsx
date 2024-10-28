
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTooltip = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Tooltip:</p>
      <CodeBlock codeString={generateDisplayComponent('Tooltip', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `return  <Tooltip text={"Tooltip Message"} variant={"top"}>Siska Apriana RIfianti</Tooltip>`;

export default CardUsageTooltip;
