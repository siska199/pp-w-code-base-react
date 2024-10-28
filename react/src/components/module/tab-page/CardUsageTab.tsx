
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

const displayUsage = `const listTab = [\n  {\n    id: "0",\n    label:"Tab 1",\n    content :<div className="w-full p-4 h-[10rem] rounded-md  border">\n      TAB CONTENT 1\n    </div>\n  },\n  {\n    id: "1",\n    label:"Tab 2",\n    content :<div className="w-full p-4 h-[10rem] rounded-md  border">\n      TAB CONTENT 2\n    </div>\n  }\n];\nreturn <Tabs layout={'horizontal'} type={'bordered'} listTab={listTab}/>`;


export default CardUsageTab;
