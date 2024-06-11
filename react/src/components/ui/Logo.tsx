import LinkCustome from "@components/ui/Link"
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"

interface TProps extends React.HTMLProps<HTMLLinkElement>, VariantProps<typeof logoVariants> {

}

const Logo = (props: TProps) => {
    const { className, sizeLogo, ...attrs } = props
    return (
        <LinkCustome to="/" className={cn(logoVariants({ className, sizeLogo, }))} {...attrs}>
            Code-base199
        </LinkCustome>
    )
}


const logoVariants = cva(
    'w-fiit inline font-staryssa text-black flex gap-2 items-center font-bold',
    {
        variants: {
            variant: {
                'clickable': 'cursor-pointer-custome',
                'none': ''
            },
            sizeLogo: {
                'small': 'text-[14px]',
                'base': 'text-[18px]',
                'large': 'text-[24px]'
            }
        },

        defaultVariants: {
            variant: "clickable",
            sizeLogo: 'base'
        }
    }
)


export default Logo