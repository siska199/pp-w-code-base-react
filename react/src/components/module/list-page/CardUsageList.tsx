
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageList = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of List:</p>
      <CodeBlock codeString={generateDisplayComponent('List', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = "\n  const listItem =[...Array(3)]?.map((_,i)=>({\n    label:'Label'+i,\n    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',\n    childs:[\n      {\n        label:'child-label1',\n        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',\n      },\n      {\n        label:'child-label2',\n        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',\n      },\n    ]\n  }))\n  return <List\n        items={listItemWithChild}\n        variantBadge={{\n          0:\"softborder-success\",\n          1 :\"softborder-warning\"\n        }}\n        customeIconLi={{\n          1:<div className=\"w-[0.35rem] h-[0.35rem] mt-2 flex-shrink-0 bg-gray-500 rounded-[50%]\"/>\n        }}\n      />"

export default CardUsageList;
