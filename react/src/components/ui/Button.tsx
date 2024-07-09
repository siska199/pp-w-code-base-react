import IconLoading from '@assets/icons/IconLoading';
import { cn } from '@lib/utils/helper';
import { variantButton } from '@lib/utils/variants/ui/variant-button';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';


interface TPropsLink {
  to?: string;
  target?: '_blank' | ''
}

type TProps = Omit<Partial<HTMLProps<HTMLButtonElement | HTMLLinkElement>>, "label" | "size" | "shape">
  & VariantProps<typeof buttonVariants>
  & {
    isLoading?: boolean;
    label: React.ReactNode | string;
    to?: string;
  }
  & (TPropsLink);


const Button = (props: TProps) => {
  const { variant, size, shape, className, isLoading = false, label, ...attrs } = props

  const CompButton = attrs?.to ? Link : "button" as React.ElementType

  let updateVariant: TProps["variant"] = variant || "solid-primary"
  if (attrs?.to && !variant) {
    updateVariant = "link-primary"
  }

  return (
    <CompButton
      {...attrs}
      disabled={isLoading || attrs?.disabled}
      className={cn(buttonVariants({ className, variant: updateVariant, size, shape, }))}
    >
      {
        isLoading ? <span><IconLoading />Loading...</span> : label
      }
    </CompButton>

  )
}



const buttonVariants = cva(
  'w-fit  gap-1 h-fit items-center  text-white justify-center font-medium flex gap-sm disabled:cursor-not-allowed  disabled:opacity-50 ',
  {
    variants: {
      variant: {
        ...variantButton,
      },
      shape: {
        "rounded": "rounded-lg",
        "circle": "rounded-full"
      },
      size: {
        "small": "py-1 px-4 ",
        "base": "py-2 px-4 ",
        "medium": "py-3 px-4 text-[16px]",
        "large": "py-4 px-5 text-[18px]",
      },
    },
    defaultVariants: {
      variant: "solid-primary",
      size: "base",
      shape: "rounded"
    },
  },
)

export default Button