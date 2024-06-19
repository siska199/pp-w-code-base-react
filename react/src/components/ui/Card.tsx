import React from "react";
import Image from "@components/ui/Image";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

export interface TPropsCard extends Omit<Partial<HTMLProps<HTMLDivElement>>, "title" | "children" | "content">, VariantProps<typeof cardVariants> {
    layout?: "vertical" | "horizontal";
    variant?: "top-bordered" | "centered-body";

    header?: {
        image?: string;
        content?: React.ReactNode | string;
    };
    body?: {
        title?: React.ReactNode | string;
        subtitle?: React.ReactNode | string;
        image?: string;
        content?: React.ReactNode | string;
    };
    footer?: React.ReactNode | string;

    customeClass?: {
        container?: string;
        header?: {
            image?: string;
            content?: string;
        };
        body?: {
            title?: string;
            subtitle?: string;
            image?: string;
            content?: string;
        };
        footer?: string;
    };
    fit?: boolean;
}

const Card: React.FC<TPropsCard> = ({
    layout = "vertical",
    header,
    body,
    footer,
    customeClass = {},
    variant,
    fit,
    className,
    ...otherProps
}) => {
    return (
        <div className={cn(cardVariants({ layout, variant, fit }), customeClass.container, className)} {...otherProps}>
            {/* HEADER */}
            {header && (
                <div className={cn("header", customeClass.header?.content)}>
                    {header.content && <div className="bg-gray-50 p-4 border-b">{header.content}</div>}
                    {header.image && <Image src={header.image} className={cn("image-header h-full w-full", customeClass.header?.image)} />}
                </div>
            )}

            {/* BODY */}
            {body && <div className="p-4 flex flex-col gap-3">
                {body.image && <Image src={body.image} className={`${customeClass.body?.image} h-[15rem]`} />}
                {(body.title || body.subtitle) && (
                    <div className="flex flex-col gap-2">
                        {body.title && (
                            <div className={cn("font-bold p-0 text-black text-body-large leading-none", customeClass.body?.title)}>
                                {body.title}
                            </div>
                        )}
                        {body.subtitle && <p className={cn("font-medium leading-none", customeClass.body?.subtitle)}>{body.subtitle}</p>}
                    </div>
                )}
                {body.content && (
                    <div className={cn("body", customeClass.body?.content)}>
                        {body.content}
                    </div>
                )}
            </div>}

            {/* FOOTER */}
            {footer && (
                <div className={cn("mb-auto p-4 text-gray bg-gray-50", customeClass.footer)}>
                    {footer}
                </div>
            )}
        </div>
    );
};

const cardVariants = cva(
    'border rounded-xl flex overflow-hidden',
    {
        variants: {
            layout: {
                vertical: "flex-col [&_.image-header]:h-[15rem]",
                horizontal: "flex-row [&_.header]:min-h-full"
            },
            variant: {
                "top-bordered": "border-t-[4px] border-t-primary",
                "centered-body": '[&>div]:my-auto [&_.body]:flex [&_.body]:flex-col [&_.body]:items-center [&_.body]:justify-center'
            },
            fit: {
                true: "w-fit",
                false: "w-full"
            },
        },
        compoundVariants: [],
        defaultVariants: {
            layout: "vertical"
        }
    }
);

export default Card;
