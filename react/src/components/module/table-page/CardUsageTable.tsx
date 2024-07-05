
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageTable = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Table:</p>
      <CodeBlock codeString={generateDisplayComponent('Table', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `

    type TData = {
      "title": string;
      "body": string;
      id: string;
    }

    const configTable = useTable<TData, false>({
        initialColumn: [
            {
                name: "Title",
                key: "title",
                isSorted: true,
                className: "min-w-[20rem] md:min-w-0"
            },
            {
                name: "Body",
                key: "body",
                className: " text-center justify-center min-w-[20rem] md:min-w-0",
            },
        ],
        initialSetting: {
            checked: true,
            pagination: true,
        },
        onFetchData: handleFetchData
    })

    async function handleFetchData(params: TSettingTable<TData>): Promise<TData[]> {
        const resposne = await fetch(\`https://jsonplaceholder.typicode.com/posts?_limit = \${ params?.itemsPerPage }& _page=\${ params?.currentPage } \`)
        return resposne.data as TData[]
    }
  return <Table<TData, false>
                {...configTable}
                withNo
                isLoading={isLoading}
            />
`;

export default CardUsageTable;
