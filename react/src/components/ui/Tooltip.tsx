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
    <p
      data-text={text}
      className={cn({
        " inline-block relative w-fit py-1": true,
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
    </p>
  );
};

export default Tooltip;
