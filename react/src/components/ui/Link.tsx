import { cn } from "@lib/utils/helper";
import { HTMLProps } from "react";
import { Link } from "react-router-dom";

interface TProps extends HTMLProps<HTMLLinkElement> {
    children: React.ReactNode;
    to: string;
    newTab?: boolean;
}

const LinkCustome = (props: TProps) => {
    const { children, to, newTab, className } = props
    return (
        <Link
            target={newTab ? '_blank' : ''}
            className={cn({
                'font-normal text-gray hover:text-gray-600cursor-pointer': true,
                [className || '']: className
            })}
            to={to} rel="noreferrer"
        >
            {children}
        </Link>
    )
}

export default LinkCustome