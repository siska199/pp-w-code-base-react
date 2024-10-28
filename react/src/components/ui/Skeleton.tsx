/* eslint-disable @typescript-eslint/ban-ts-comment */

import { cn } from "@lib/utils/helper";
import { HTMLProps, useEffect, useRef, useState } from "react";

interface TProps extends HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    isLoading: boolean;
    type?: "text" | "block"
    width?: number | string;
    height?: number | string;
    totalSkeleton?: number;
}

const Skeleton = (props: TProps) => {
    const { children, className, isLoading = false, type = "text", ...otherProps } = props;
    const contentRefs = useRef<(HTMLDivElement)>(null);
    const [totalSkeleton, setTotalSkeleton] = useState(0)
    const [skeletonStyle, setSkeletonStyle] = useState({
        width: 0,
        height: 0,
        borderRadius: ""
    })

    useEffect(() => {
        setTimeout(() => {
            const elmnContent = contentRefs?.current?.firstChild as any
            if (elmnContent && type == "text") {
                const lineHeight = parseFloat(getComputedStyle(elmnContent).lineHeight);
                const lines = Math.ceil(elmnContent.offsetHeight / lineHeight);
                setSkeletonStyle({
                    width: elmnContent.offsetWidth,
                    height: lineHeight - 8,
                    borderRadius: "0.5rem"
                });
                setTotalSkeleton(lines || 0)
            }
            if (elmnContent && type === "block") {
                const computedStyles = window.getComputedStyle(elmnContent as Element);
                const borderRadius = computedStyles.borderRadius;
                setSkeletonStyle({
                    width: elmnContent.offsetWidth,
                    height: elmnContent.offsetHeight,
                    borderRadius
                });
                setTotalSkeleton(1)

            }

        }, 600)
    }, [children])

    return (
        <div
            className={cn({
                'w-fit h-auto relative  text-wrap flex flex-col': true,
                [className || '']: className
            })}
            {...otherProps}
        >
            <div ref={contentRefs} className={cn({
                "w-full": true,
                'opacity-0': isLoading
            })}>
                {children}
            </div>

            {
                (isLoading && totalSkeleton > 0) && <span className=" absolute top-1 left-0 flex flex-col gap-2  ">
                    {
                        [...new Array(totalSkeleton)]?.map((_, i) => <div key={i}
                            style={skeletonStyle}
                            className={cn({
                                "animate-pulse  bg-gray-300  shadow ": true
                            })}>
                        </div>)
                    }
                </span>
            }
        </div>
    )
}


export default Skeleton;
