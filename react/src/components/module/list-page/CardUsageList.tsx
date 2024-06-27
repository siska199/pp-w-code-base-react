
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

const displayUsage = `
  const listItemWithChild =[
    {
      label:'Label1',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label2',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label3',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label4',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
    {
      label:'Label5',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      childs:[
        {
          label:'child-label1',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          label:'child-label2',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          label:'child-label3',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ]
    },
  ]
  return <List
          items={listItem}
        />
`;

export default CardUsageList;
