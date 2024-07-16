import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import Tabs from "@components/ui/Tabs";
import { cn } from "@lib/utils/helper";

interface TProps {
  title: string;
  subTitle: string;
  displayCodeBase: string;
  listExample: {
    title?: string;
    component: React.ReactNode;
  }[];
}

const CardIntroComponent = (props: TProps) => {
  const { title, listExample, subTitle, displayCodeBase } = props;
  const listTab = [
    {
      id: "0",
      label: "Preview",
      content: (
        <div
          className={cn({
            "flex flex-col items-center gap-4 border rounded-md py-4 px-8 transition-all duration-500": true,
          })}
        >
          {listExample?.map((example, i) => (
            <div key={i} className="flex flex-col gap-4 w-full">
              {example?.title && <p className="text-left border-b pb-2 text-black font-medium text-body-medium">{example.title}</p>}
              <div className="flex flex-col items-center gap-4 flex-wrap ">{example?.component}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "1",
      label: "Code Base",
      content: <CodeBlock codeString={displayCodeBase} />,
    },
  ];

  return (
    <>
      <CardIntro title={title} subTitle={subTitle} />
      <Tabs listTab={listTab} customeClass={{  }} />
    </>
  );
};

export default CardIntroComponent;
