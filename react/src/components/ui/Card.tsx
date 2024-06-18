
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof cardVariants> {
}

const Card = (props: TProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cn(cardVariants({ className }))}
            {...otherProps}
        >
            {/* Add your component implementation here */}
        </div>
    )
}

const cardVariants = cva(
    '',
    {
        variants: {
            variant: {
                // Define your variants here
            },
            // Add more variant options here
        },
        compoundVariants: [
            // Define compound variants here
        ],
        defaultVariants: {
            // Define default variants here
        }
    }
)

export default Card;
