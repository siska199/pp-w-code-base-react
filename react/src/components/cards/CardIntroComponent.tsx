import CardIntro from '@components/cards/CardIntro';
import CodeBlock from '@components/ui/CodeBlock';
import Tabs from '@components/ui/Tabs';

interface TProps {
    title: string;
    subTitle: string;
    displayCodeBase: string;
    listExample: {
        title?: string;
        component: React.ReactNode;
    }[]
}

const CardIntroComponent = (props: TProps) => {
    const { title, listExample, subTitle, displayCodeBase, } = props
    const listTab = [
        {
            id: "0",
            label: 'Preview'
        },
        {
            id: "1",
            label: 'Code Base'
        },
    ]

    return (
        <>
            <CardIntro title={title} subTitle={subTitle} />
            <Tabs listTab={listTab} >
                {
                    ({ activeTab }) => <>
                        {activeTab === 0 && <div className="flex flex-col items-center gap-4 border rounded-md py-4 px-8">

                            {
                                listExample?.map((example, i) => (
                                    <div key={i} className="flex flex-col gap-4 w-full">
                                        {
                                            example?.title && <p className="text-left text-black font-medium text-body-medium">{example.title}</p>
                                        }
                                        <div className="flex flex-col items-center gap-4">
                                            {example?.component}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>}
                        {activeTab == 1 && <CodeBlock codeString={displayCodeBase} />}
                    </>
                }
            </Tabs>
        </>
    )
}

export default CardIntroComponent