
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



const displayUsage = `
  const listStep =[...Array(5)]?.map((_,i)=>({
    title: \`Step \${i+1}\`,
    caption: \`Siska Apriana Rifianti \${i+1}\`
  }))
  return <ProgressStep variant={"horizontal"} activeStep={1} listStep={listStep}  />
`;

export default CardUsageProgressStep;
