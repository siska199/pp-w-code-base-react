import Button from "@components/ui/Button";

interface TProps {
    path: string;
    to?: string;
}

const Pathname = (props: TProps) => {
    const { path, to } = props

    const Label = <span className="italic">{path}</span>

    return to ? <Button label={Label} to="to" variant={"solid-white"} /> : Label
}

export default Pathname