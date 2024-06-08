import Container from "@components/ui/Container"

interface TProps {
    title: string;
    children: React.ReactNode;
}

const CardSubMenu = (props: TProps) => {
    const { title, children } = props
    return (
        <Container variant="vss" gap={"base"} className="text-gray">
            <h5 className='text-gray-900 text-body-3xl border-b w-full font-bold pb-2'>
                {title}
            </h5>
            {children}
        </Container>
    )
}

export default CardSubMenu