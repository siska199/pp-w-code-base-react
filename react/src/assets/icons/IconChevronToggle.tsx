import { IconChevronDown } from '@assets/icons';
import { cn } from '@lib/utils/helper';

interface TProps {
    isOpen: boolean;
    onClick?:()=>void;
    className?: string;
}

const IconChevronToggle = (props: TProps) => {
    const { isOpen, onClick,className,...attrs } = props
    
    const handleOnClick =()=>{
        onClick && onClick()
    }
    return (
        <IconChevronDown className={cn({
            "transition-transform flex-inline duration-300 cursor-pointer": true,
            "rotate-180": isOpen,
            [className||'']:className
        })} {...attrs} onClick={handleOnClick}/>
    )
}

export default IconChevronToggle