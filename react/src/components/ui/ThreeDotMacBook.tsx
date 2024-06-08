import { HTMLProps } from "react"

interface TProps extends HTMLProps<HTMLDivElement> {

}

const ThreeDotMacBook = (props: TProps) => {
    const { className, ...attrs } = props
    return (
        <div className={` flex gap-2 top-0 left-0 w-fit ${className}`} {...attrs}>
            <div className='w-4 h-4 bg-error rounded-full'></div>
            <div className='w-4 h-4 bg-warning rounded-full'></div>
            <div className='w-4 h-4 bg-success rounded-full'></div>
        </div>
    )
}

export default ThreeDotMacBook