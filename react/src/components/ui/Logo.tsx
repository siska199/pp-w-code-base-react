import Button from "@components/ui/Button"
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"

interface TProps extends React.HTMLProps<HTMLLinkElement>, VariantProps<typeof logoVariants> {

}

const Logo = (props: TProps) => {
    const { className, sizeLogo, } = props
    return (
        <Button customeElement="link" label="Cb199" to="/" className={cn(logoVariants({ className: `${className} text-primary`, sizeLogo, }))} />

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
                'large': 'text-[28px]'
            }
        },

        defaultVariants: {
            variant: "clickable",
            sizeLogo: 'base'
        }
    }
)


export default Logo