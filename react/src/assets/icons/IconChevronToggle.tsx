import { IconChevronDown } from '@assets/icons';
import clsx from 'clsx';

interface TProps {
    isOpen: boolean;
}

const IconChevronToggle = (props: TProps) => {
    const { isOpen } = props
    return (
        <IconChevronDown className={clsx({
            "transition-transform duration-300 cursor-pointer": true,
            "rotate-180": isOpen
        })} />
    )
}

export default IconChevronToggle