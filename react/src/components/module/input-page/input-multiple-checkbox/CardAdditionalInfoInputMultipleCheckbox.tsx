
import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputMultipleCheckbox = () => {
  const listAdditionalInfo = [
    {
      title: "Additional Info 1",
      caption: <CodeBlock codeString={info1} />
    },
    {
      title: "Additional Info 2",
      caption: <CodeBlock codeString={info2} />
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

const info1 = `// Additional info 1`;
const info2 = `// Additional info 2`;

export default CardAdditionalInfoInputMultipleCheckbox;
