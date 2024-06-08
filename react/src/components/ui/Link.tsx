
interface TProps {
    label: string;
    url: string;
    newTab?: boolean;
}

const Link = (props: TProps) => {
    const { label, url, newTab } = props
    return (
        <a
            target={newTab ? '_blank' : ''}
            className={`font-normal hover:underline cursor-pointer`}
            href={url} rel="noreferrer"
        >
            {label}
        </a>
    )
}

export default Link