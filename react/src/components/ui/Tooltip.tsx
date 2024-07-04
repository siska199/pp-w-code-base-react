interface TProps {
    children: React.ReactNode;
    text: string;
    variant?: "top" | "bottom" | "left" | "right";
    customeClass? :{
        tooltip:string;
        rectangle:string;
    }
}

const Tooltip = (props: TProps) => {
    const { children, text, variant = "top",customeClass  } = props
    return (
        <div data-text={text} className={`tooltip ${customeClass ?.tooltip} ${variant} relative flex justify-center items-center w-fit p-1`}>
            {children}
            <div className={`rectangle ${variant}  ${customeClass ?.rectangle}`}></div>
        </div>
    )
}

export default Tooltip