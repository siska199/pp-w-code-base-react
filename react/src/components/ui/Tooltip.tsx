import { cn } from "@lib/utils/helper";
import { forwardRef } from "react";

interface TProps {
  children: React.ReactNode;
  text: string;
  variant?: "top" | "bottom" | "left" | "right";
  customeClass?: {
    tooltip?: string;
    rectangle?: string;
  };
}

const Tooltip = forwardRef<HTMLDivElement, TProps>(function Tooltip(props, ref) {
  const { children, text, variant = "top", customeClass } = props;
  return (
    <div
      data-text={text}
      className={cn({
        "p-1 inline-block relative !overflow-visible w-fit": true,
        [customeClass?.tooltip || ""]: !!customeClass?.tooltip,
        "tooltip ": !!text,
        [`${variant}`]: !!variant,
      })}
      ref={ref}
    >
      {children}
      {text && (
        <span
          className={cn({
            "rectangle ": true,
            [customeClass?.rectangle || ""]: !!customeClass?.rectangle,
            [`${variant}`]: !!variant,
          })}
        ></span>
      )}
    </div>
  );
});

export default Tooltip;
