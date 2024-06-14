
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
}

const Breadcrumb = (props: TProps) => {
    const { className, items, ...otherProps } = props;

    return (
        <div
            className={cn(breadcrumbVariants({ className }))}
            {...otherProps}
        >

            {
                items?.map((item, i) => <div key={i} className="flex items-center">
                    <Button key={i} label={<>{item?.label}<IconChevronRight className="" /></>} customeElement={"link"} className="!pr-0 !pl-2 !py-1" variant={"plain"} to={item?.url} />
                </div>)
            }

        </div>
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
