import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof logoVariants> {

}

const Logo = (props: TProps) => {
    const { className, sizeLogo } = props
    return (
        <div className={cn(logoVariants({ className, sizeLogo, }))} {...props}>
            Logo
        </div>
    )
}


const logoVariants = cva(
    'w-fiit inline ',
    {
        variants: {
            variant: {
                'clickable': '',
                'none': ''
            },
            sizeLogo: {
                'small': '',
                'base': '',
                'large': ''
            }
        },

        defaultVariants: {
            variant: "none",
            sizeLogo: 'base'
        }
    }
)


export default Logo