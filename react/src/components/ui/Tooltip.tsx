interface TProps {
    children: React.ReactNode;
    text: string;
    variant?: "top" | "bottom" | "left" | "right"
}

const Tooltip = (props: TProps) => {
    const { children, text, variant = "top" } = props
    return (
        <div data-text={text} className={`tooltip ${variant} relative flex justify-center items-center w-fit `}>
            {children}
        </div>
    )
}

export default Tooltip