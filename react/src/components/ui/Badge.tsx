import { IconClose } from "@assets/icons";
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"

interface TProps extends  React.HTMLProps<HTMLDivElement> , VariantProps<typeof badgeVariants > {
    withIconClose? : boolean;
}

const Badge = (props: TProps) => {
    const {label,className,variant, isRounded,withIconClose, ...attrs} =props
  return (
    <div className={cn(badgeVariants({className,variant,isRounded}))} {...attrs}>
        {label}
        {
            withIconClose &&<IconClose/>
        }
    </div>
  )
}


const badgeVariants = cva(
    'w-fit rounded-lg h-fit border rounded items-center justify-center py-1 px-2 ',
    {
      variants : {
        variant : {
          'primary':"!border-primary"
        },
        isRounded:{
            "false":"",
            "true" : "rounded-full"
          },
      },
      defaultVariants : {
        variant     : "primary",
        isRounded   : true
      }
    }
  )
  

export default Badge