import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  customeElement?: React.ReactNode;
}

const Badge = (props: TProps) => {
  const { label, className, variant, isRounded,typeBadge, customeElement, ...attrs } = props
  return (
    <span className={`${cn(badgeVariants({ className, variant,typeBadge, isRounded }))} text-body-small`} {...attrs}>
      {label}
      {customeElement}
    </span>
  )
}


const badgeVariants = cva(
  'w-fit rounded-lg h-fit min-w-[3rem] flex-inline gap-1 text-center font-medium rounded items-center justify-center py-1  px-2 ',
  {
    variants: {
      variant: {
        'primary': "bg-primary-50 text-primary-700",
        'success': "bg-success-50 text-success-700",
        'warning': "bg-warning-50 text-warning-700 ",
        'error': "bg-error-50 text-error-700 ",
      },
      typeBadge :{
        "1" : "",
        "2" : "border"
      },
      isRounded: {
        "false": "",
        "true": "rounded-full"
      },
    },
    defaultVariants: {
      variant: "primary",
      isRounded: true,
      typeBadge :"1"
    }
  }
)


export default Badge