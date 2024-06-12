import Container from "@components/ui/Container"

interface TProps {
    title: string;
    children: React.ReactNode;
    customeClass?: {
        container?: string;
        title?: string;
    }
}

const CardSubMenu = (props: TProps) => {
    const { title, children, customeClass } = props
    return (
        <Container variant="vss" gap={"base"} className={`${customeClass?.container} text-gray`}>
            <p className={` ${customeClass?.title} !text-gray-900 text-body-2xl border-b w-full font-bold pb-2`}>
                {title}
            </p>
            {children}
        </Container>
    )
}

export default CardSubMenu