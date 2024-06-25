import { cn, getAssetURL } from '@lib/utils/helper';
import React, { HTMLProps, useState } from 'react';

interface TProps extends Omit<Partial<HTMLProps<HTMLImageElement>>, ""> {
    src: string;
    alt?: string;

    customeClassName?: {
        container?: string;
        image?: string;
        containerOverlay?: string;
    };
    withSkeleton?: boolean;
    timeoutLoadImage?: number;

    overlay?: {
        isShowOnHover?: boolean;
        content?: React.ReactNode;
    }

}

/**
 * Image Component
 *
 * Renders an image with optional skeleton loading state and overlay content.
 * The image source can be either a URL or an asset name.
 *
 * @param {TProps} props - The props for the component.
 * @param {string} props.src - The source of the image.
 * @param {string} [props.alt] - The alt text for the image.
 * @param {Object} [props.customeClassName] - Custom class names for different parts of the component.
 * @param {string} [props.customeClassName.container] - Custom class name for the container div.
 * @param {string} [props.customeClassName.image] - Custom class name for the image element.
 * @param {string} [props.customeClassName.containerOverlay] - Custom class name for the overlay container div.
 * @param {boolean} [props.withSkeleton] - Whether to show a skeleton loading state.
 * @param {number} [props.timeoutLoadImage=0] - Timeout duration before removing the loading state.
 * @param {Object} [props.overlay] - Overlay configuration.
 * @param {boolean} [props.overlay.isShowOnHover] - Whether to show the overlay content on hover.
 * @param {React.ReactNode} [props.overlay.content] - The content to display in the overlay.
 * 
 * @returns {JSX.Element} The rendered Image component.
 */

const Image = (props: TProps) => {
    const { src, alt, className, timeoutLoadImage = 0, withSkeleton, customeClassName, overlay, ...attrs } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, timeoutLoadImage)
    };

    return (
        <div className={cn({
            "relative group w-full h-full bg-gray-100 overflow-hidden": true,
            [className || '']: className,
            [customeClassName?.container || ""]: customeClassName?.container
        })}>
            <img
                src={src?.includes('http') ? src : getAssetURL({ name: src })}
                alt={alt || src.replace('-', ' ')}
                onLoad={handleLoad}
                className={cn({
                    'w-full h-full object-cover object-center': true,
                    'clear-effect': !isLoading,
                    'blur-effect': isLoading,

                    [customeClassName?.image || '']: customeClassName?.image

                })}
                {...attrs}
            />
            {
                isLoading && withSkeleton && <div role="status" className=" absolute top-0 left-0 border h-full w-full border-gray-400 rounded shadow animate-pulse  ">
                    <div className="flex items-center justify-center h-full w-full mb-4 bg-gray-400 rounded ">
                        <svg className="w-10 h-10 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                </div>
            }
            {(overlay?.content) && (
                <div className={cn({
                    "absolute top-0 left-0 bg-black/30 opacity-100 translate-y-0  transition-all duration-300 transform  w-full h-full": true,
                    'translate-y-[50%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ': overlay?.isShowOnHover,
                    [customeClassName?.containerOverlay || ""]: customeClassName?.containerOverlay
                })}>
                    {overlay?.content}
                </div>
            )
            }



        </div >
    );
};

export default Image;
