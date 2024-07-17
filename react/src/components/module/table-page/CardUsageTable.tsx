import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageTable = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Table:</p>
      <CodeBlock codeString={generateDisplayComponent("Table", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  '\n\n    type TData = {\n      "title": string;\n      "body": string;\n      id: string;\n    }\n\n    const configTable = useTable<TData, false>({\n        initialColumn: [\n            {\n                name: "Title",\n                key: "title",\n                isSorted: true,\n                className: "min-w-[20rem] md:min-w-0"\n            },\n            {\n                name: "Body",\n                key: "body",\n                className: " text-center justify-center min-w-[20rem] md:min-w-0",\n            },\n        ],\n        initialSetting: {\n            checked: true,\n            pagination: true,\n        },\n        onFetchData: handleFetchData\n    })\n\n    async function handleFetchData(params: TSettingTable<TData>): Promise<TData[]> {\n        const resposne = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit = ${ params?.itemsPerPage }& _page=${ params?.currentPage } `)\n        return resposne.data as TData[]\n    }\n  return <Table<TData, false>\n                {...configTable}\n                withNo\n                isLoading={isLoading}\n            />\n';

export default CardUsageTable;
