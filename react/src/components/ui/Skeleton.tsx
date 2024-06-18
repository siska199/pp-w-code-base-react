/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps, useEffect, useRef, useState } from "react";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    children: React.ReactNode;
    isLoading: boolean;
    type?: "text" | "block"
    width?: number | string;
    height?: number | string;
    totalSkeleton?: number;
}

const Skeleton = (props: TProps) => {
    const { children, className, isLoading = false, type = "text", ...otherProps } = props;
    const contentRefs = useRef<(HTMLDivElement | null)>(null);
    const [totalSkeleton, setTotalSkeleton] = useState(0)
    const [skeletonStyle, setSkeletonStyle] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            const elmnContent = contentRefs?.current?.firstChild
            if (elmnContent && type == "text") {
                // @ts-ignore
                const lineHeight = parseFloat(getComputedStyle(elmnContent).lineHeight);
                // @ts-ignore
                const lines = Math.ceil(elmnContent.offsetHeight / lineHeight);
                setSkeletonStyle({
                    // @ts-ignore
                    width: elmnContent.offsetWidth,
                    height: lineHeight - 8,
                });
                setTotalSkeleton(lines || 0)
            }
            if (elmnContent && type === "block") {
                setSkeletonStyle({
                    // @ts-ignore
                    width: elmnContent.offsetWidth,
                    // @ts-ignore
                    height: elmnContent.offsetHeight,
                });
                setTotalSkeleton(1)

            }

        }, 600)
    }, [children])

    return (
        <div
            className={cn(skeletonVariants({ className: `${className}  w-fit h-auto relative  text-wrap flex flex-col` }))}
            {...otherProps}
        >
            <div ref={contentRefs} className={cn({
                className: '',
                'opacity-0': isLoading
            })}>
                {children}
            </div>
            {
                (isLoading && totalSkeleton) && <span className=" absolute top-1 left-0 flex flex-col gap-2  ">
                    {
                        [...new Array(totalSkeleton)]?.map((_, i) => <div key={i}
                            style={skeletonStyle}
                            className="rounded-lg animate-pulse  bg-gray-300  shadow ">
                        </div>)
                    }
                </span>
            }
        </div>
    )
}

const skeletonVariants = cva(
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

export default Skeleton;
