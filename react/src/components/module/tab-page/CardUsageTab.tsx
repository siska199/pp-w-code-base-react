
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTab = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Tab:</p>
      <CodeBlock codeString={generateDisplayComponent('Tab', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const listTab = [
    {
      id: "0",
      label:"Tab 1",
      content :<div className="w-full p-4 h-[10rem] rounded-md  border">
        TAB CONTENT 1
      </div>
    },
    {
      id: "1",
      label:"Tab 2",
      content :<div className="w-full p-4 h-[10rem] rounded-md  border">
        TAB CONTENT 2
      </div>
    }
  ]
  return <Tabs layout={'horizontal'} type={'bordered'} listTab={listTab}/>`;

export default CardUsageTab;
