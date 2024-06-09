import CodeBlock from '@components/ui/CodeBlock';
import Tabs from '@components/ui/Tabs';
import React from 'react'

interface TProps {
    title: string;
    subTitle: string;
    DisplayComponent: JSX.Element;
    displayCodeBase: string;
}

const CardIntro = (props: TProps) => {
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

            <div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-justify text-body-large  max-w-full">{subTitle}</p>
            </div>
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

export default CardIntro