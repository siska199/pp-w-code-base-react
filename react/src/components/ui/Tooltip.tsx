interface TProps {
  children: React.ReactNode;
  text: string;
  variant?: "top" | "bottom" | "left" | "right";
  customeClass?: {
    tooltip?: string;
    rectangle?: string;
  };
}

const Tooltip = (props: TProps) => {
  const { children, text, variant = "top", customeClass } = props;
  return (
    <span data-text={text} className={`${text && "tooltip"} ${customeClass?.tooltip} ${variant} inline-block relative w-fit p-1`}>
      {children}
      {text && <span className={`rectangle ${variant}  ${customeClass?.rectangle}`}></span>}
    </span>
  );
};

export default Tooltip;
