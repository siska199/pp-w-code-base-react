import IconLoading from '@assets/icons/IconLoading';
import { cn } from '@lib/utils/helper';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';
import { variantButton } from '@lib/utils/data/variant-color';


interface TProps extends HTMLProps<HTMLButtonElement | HTMLLinkElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  customeElement?: "button" | "link" | null;
  to?: string;
  newTab?: boolean;
}

const Button = (props: TProps) => {
  const { variant, sizeCustome, newTab, customeElement = "button", isContained, shapeCustome, children, className, isLoading = false, ...attrs } = props

  const CompButton = customeElement === "link" ? Link : "button" as React.ElementType

  return (
    <CompButton
      {...attrs}
      disabled={isLoading || attrs?.disabled}
      className={cn(buttonVariants({ className, variant, sizeCustome, shapeCustome, isContained, }))}
      target={newTab ? '_blank' : ''}

    >
      {
        isLoading ? <span>
          <IconLoading />Loading...
        </span> : children
      }
    </CompButton>

  )
}

const buttonVariants = cva(
  'w-fit  gap-1 h-fit items-center  text-white justify-center flex gap-sm disabled:cursor-not-allowed  cursor-pointer-custome ',
  {
    variants: {
      variant: {
        ...variantButton,
      },
      isContained: {
        "false": "bg-white",
        "true": ""
      },
      shapeCustome: {
        "rounded": "rounded-lg",
        "circle": "rounded-full"
      },
      sizeCustome: {
        "small": "py-1 px-4 ",
        "base": "py-2 px-4 ",
        "medium": "py-3 px-4 text-body-medium",
        "large": "py-3 px-5 text-body-medium",
        "xl": "py-3 px-6 text-body-3xl",
      },
    },
    defaultVariants: {
      variant: "solid-primary",
      sizeCustome: "base",
      shapeCustome: "rounded"
    }
  }
)

export default Button