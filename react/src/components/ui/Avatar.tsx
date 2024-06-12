import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLProps } from "react"

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    type: "image" | "alphabet";
    src?: string;
    name: string;
}

const Avatar = (props: TProps) => {
    const { className, type = "image", src, name, children, variant, sizeAvatar, shapeAvatar, status } = props
    return (
        <div
            className={cn(avatarVariants({ className, variant, sizeAvatar, shapeAvatar, status }))}
        >
            {type === "image" && <img src={src || ""} alt={name} />}
            {type === "alphabet" && <span>{name?.substring(0, 1)}</span>}
        </div>
    )
}

const avatarVariants = cva(
    'text-white flex items-center justify-center w-fit font-semibold',
    {
        variants: {
            variant: {
                'solid-primary': 'bg-primary',
                'solid-black': 'bg-black',


                'soft-primary': 'bg-primary-50 text-primary-700',
                'soft-warning': 'bg-warning-50 text-warning-700',
                'soft-success': 'bg-success-50 text-success-700',
                'soft-error': 'bg-error-50 text-error-700',

            },

            sizeAvatar: {
                'tiny': '',
                'small': '',
                base: 'w-[2.875rem] h-[2.875rem]',
                large: ''
            },
            shapeAvatar: {
                'rounded': '',
                'circular': 'rounded-full'
            },
            status: {
                'none': '',
                'offline': '',
                'online': '',
                'away': '',
                'dont-distrub': '',
                'icon': ''
            }

        },
        compoundVariants: [

        ],
        defaultVariants: {
            sizeAvatar: "base",
            shapeAvatar: "circular"
        }
    }
)

export default Avatar