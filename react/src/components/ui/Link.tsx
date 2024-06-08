import { HTMLProps } from "react";

interface TProps extends HTMLProps<HTMLLinkElement> {
    label: string;
    url: string;
    newTab?: boolean;
}

const Link = (props: TProps) => {
    const { label, url, newTab, className } = props
    return (
        <a
            target={newTab ? '_blank' : ''}
            className={`font-normal text-gray hover:text-gray-600 hover:underline cursor-pointer ${className}`}
            href={url} rel="noreferrer"
        >
            {label}
        </a>
    )
}

export default Link