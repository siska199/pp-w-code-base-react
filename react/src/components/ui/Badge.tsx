import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  customeElement?: React.ReactNode;
}

const Badge = (props: TProps) => {
  const { label, className, variant, isRounded, customeElement, ...attrs } = props
  return (
    <span className={cn(badgeVariants({ className, variant, isRounded }))} {...attrs}>
      {label}
      {customeElement}
    </span>
  )
}


const badgeVariants = cva(
  'w-fit rounded-lg h-fit min-w-[3rem] flex gap-1 text-center font-medium rounded items-center justify-center py-1  px-2 ',
  {
    variants: {
      variant: {
        'primary': "bg-primary-50 text-primary-700",
        'success': "bg-success-50 text-success-700",
        'error': "bg-error-50 text-error-700 ",

      },
      isRounded: {
        "false": "",
        "true": "rounded-full"
      },
    },
    defaultVariants: {
      variant: "primary",
      isRounded: true
    }
  }
)


export default Badge