
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

interface TProps extends Omit<Partial<HTMLProps<HTMLDivElement>>, "title" | "children" | "className" | "content">, VariantProps<typeof cardVariants> {
    header?: React.ReactNode | string;
    footer?: React.ReactNode | string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    body?: string | React.ReactNode;
    customeClass?: {
        title?: string;
        body?: string;
        container?: string;
    };
    variant?: "top-bordered" | "centered-body"
    fit?: boolean;
}

const Card = (props: TProps) => {
    const { title, subtitle, body, variant, header, fit, footer, customeClass, ...otherProps } = props;
    return (
        <div
            className={cn(cardVariants({ className: `${customeClass?.container}`, variant, fit }))}
            {...otherProps}

        >
            {header}
            <div className="p-4 flex flex-col gap-4">
                {(title || subtitle) && <div>
                    {
                        title && <p className={cn({
                            'font-bold !text-black text-body-large': true,
                            [customeClass?.title || ""]: customeClass?.title
                        })}>
                            {title}
                        </p>
                    }
                    {
                        subtitle && <p className="font-medium">{subtitle}</p>
                    }
                </div>}
                {
                    body && <div className={cn({
                        "body": true,
                        [customeClass?.body || ""]: customeClass?.body
                    })}>
                        {body}
                    </div>
                }
            </div>
            {footer}
        </div>
    )
}

const cardVariants = cva(
    ' border rounded-xl overflow-hidden flex flex-col',
    {
        variants: {
            variant: {
                "top-bordered": "border-t-[4px] border-t-primary",
                "centered-body": '[&>div]:my-auto  [&_.body]:flex [&_.body]:flex-col [&_.body]:items-center [&_.body]:justify-center'
            },
            fit: {
                "true": "w-fit",
                "false": "w-full"
            },
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
