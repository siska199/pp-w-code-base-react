
import { IconChevronRight } from "@assets/icons";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";
import Button from "./Button";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof breadcrumbVariants> {
    items: {
        url: string;
        label: string | React.ReactNode;
    }[];

    customeIconDivider?: React.ReactNode;
    withIconDivider?: boolean;
    customeClass?: {
        active?: string;
        label?: string;
    }

    activeItem?: number;
}

const Breadcrumb = (props: TProps) => {
    const { className, items, customeIconDivider, activeItem, customeClass, withIconDivider = true, ...otherProps } = props;



    return (
        <div
            className={cn(breadcrumbVariants({
                className: `${className} ${!withIconDivider && "gap-4"}`
            }))}
            {...otherProps}
        >

            {
                items?.map((item, i) => {

                    const isActiveItem = location.pathname === item?.url || activeItem === i
                    return <div key={i} className="flex items-center">
                        <Button key={i}
                            label={
                                <div className={cn({
                                    "flex ": true,
                                    "": isActiveItem
                                })}>
                                    {item?.label}
                                    {
                                        withIconDivider && <span className="px-2 ">{(customeIconDivider ?? <IconChevronRight className="" />)}</span>
                                    }
                                </div>
                            }
                            className={cn({
                                "!p-0 !py-1 !flex": true,
                                [`!font-medium ${customeClass?.active || ""} `]: isActiveItem,
                                [customeClass?.label || ""]: customeClass?.label
                            })}
                            variant={"link-black"}
                            to={item?.url} />
                    </div>
                })
            }

        </div >
    )
}

const breadcrumbVariants = cva(
    'flex gap-0',
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

export default Breadcrumb;
