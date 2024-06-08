import HeaderIntro from "@components/HeaderIntro"
import CodeBlock from "@components/ui/CodeBlock"

const AccordionPage = () => {
    return (
        <article className="min-h-[1010vh] max-w-full flex flex-col gap-8">
            <HeaderIntro
                title={'Accordion'}
                subTitle=" An accordion consists of multiple sections or panels, each containing a header and associated content. The headers are usually displayed in a vertical stack, and clicking on a header expands the associated content while collapsing the others."
            />
            <CodeBlock />
        </article>
    )
}

export default AccordionPage