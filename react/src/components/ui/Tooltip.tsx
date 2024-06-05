interface TProps {
    children: React.ReactNode;
    text: string;
    variant?: "top" | "bottom" | "left" | "right"
}

const Tooltip = (props: TProps) => {
    const { children, text, variant = "top" } = props
    return (
        <div className="tooltip flex justify-center items-center w-fit">
            {children}
            <div className={`tooltip-text flex items-center justify-center  w-full ${variant}`}>
                <div className="px-1 text w-fit">{text}</div>
                
            </div>
        </div>
    )
}

export default Tooltip