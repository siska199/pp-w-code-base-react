import HeaderIntro from "@components/HeaderIntro"

const AccordioPage = () => {
    return (
        <article className="min-h-[1010vh]">
            <HeaderIntro
                title={'Accordion'}
                subTitle=" An accordion consists of multiple sections or panels, each containing a header and associated content. The headers are usually displayed in a vertical stack, and clicking on a header expands the associated content while collapsing the others."
            />
        </article>
    )
}

export default AccordioPage