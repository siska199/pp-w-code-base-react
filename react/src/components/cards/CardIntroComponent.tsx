import CardIntro from '@components/cards/CardIntro';
import CodeBlock from '@components/ui/CodeBlock';
import Tabs from '@components/ui/Tabs';

interface TProps {
    title: string;
    subTitle: string;
    DisplayComponent: JSX.Element;
    displayCodeBase: string;
}

const CardIntroComponent = (props: TProps) => {
    const { title, subTitle, DisplayComponent, displayCodeBase, } = props
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
                        {activeTab === 0 && DisplayComponent}
                        {activeTab == 1 && <CodeBlock codeString={displayCodeBase} />}
                    </>
                }
            </Tabs>
        </>
    )
}

export default CardIntroComponent