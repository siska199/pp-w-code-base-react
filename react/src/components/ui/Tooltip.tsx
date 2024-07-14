import { cn } from "@lib/utils/helper";

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
    <span
      data-text={text}
      className={cn({
        " inline-block relative w-fit p-1": true,
        [customeClass?.tooltip || ""]: customeClass?.tooltip,
        "tooltip ": text,
        [`${variant}`]: variant,
      })}
    >
      {children}
      {text && (
        <span
          className={cn({
            "rectangle ": true,
            [customeClass?.rectangle || ""]: customeClass?.rectangle,
            [`${variant}`]: variant,
          })}
        ></span>
      )}
    </span>
  );
};

export default Tooltip;
