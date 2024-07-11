
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageProgressStep = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of ProgressStep:</p>
      <CodeBlock codeString={generateDisplayComponent('ProgressStep', displayUsage)} />
    </CardSubMenu>
  );
}



const displayUsage = "\n  const listStep =[...Array(5)]?.map((_,i)=>({\n    title: `Step ${i+1}`,\n    caption: `Siska Apriana Rifianti ${i+1}`\n  }))\n  return <ProgressStep variant={\"horizontal\"} activeStep={1} listStep={listStep}  />\n"
export default CardUsageProgressStep;
