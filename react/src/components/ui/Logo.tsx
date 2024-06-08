import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof logoVariants> {

}

const Logo = (props: TProps) => {
    const { className, sizeLogo, ...attrs } = props
    return (
        <div style={{color:'#EC4699'}} className={cn(logoVariants({ className, sizeLogo, }))} {...attrs}>
            🌼CodeBase199
        </div>
    )
}


const logoVariants = cva(
    'w-fiit inline flex gap-2 items-center font-bold  ',
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