import Button from "@components/ui/Button"

interface TProps {
    to: string;
}

const Here = (props: TProps) => {
    const { to } = props
    return (
        <Button label="here" to={to} />
    )
}

export default Here