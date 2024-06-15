
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";

const CardIntroAvatar = () => {
  const listExample = [
    {
      title: 'Color Variants',
      component: <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <Avatar type="alphabet" sizeAvatar={"tiny"} name="Siska" />
          <Avatar type="alphabet" variant={"soft-warning"} name="Siska" />
          <Avatar type="alphabet" variant={"solid-primary"} name="Siska" />
          <Avatar type="alphabet" variant={"soft-success"} sizeAvatar={"large"} name="Siska" />
        </div>
        <div className="flex flex-col gap-2">
          <Avatar type="alphabet" sizeAvatar={"tiny"} name="Siska" />
          <Avatar type="alphabet" variant={"soft-warning"} name="Siska" />
          <Avatar type="alphabet" variant={"solid-primary"} name="Siska" />
          <Avatar type="alphabet" variant={"soft-success"} sizeAvatar={"large"} name="Siska" />
        </div>
      </div>
    },
    {
      title: '',
      component: <div className="flex gap-4 items-center">
        <Avatar type="image" sizeAvatar={"tiny"} name="Siska" status={"online"} />
        <Avatar type="image" name="Siska" status={"dont-distrub"} />
        <Avatar type="alphabet" variant={"solid-white"} shapeAvatar={"rounded"} name="Siska" status={"offline"} />
        <Avatar type="image" src={"https://i.pinimg.com/564x/bb/32/50/bb325038c19d2f020d498487964cfc2e.jpg"} variant={"solid-black"} sizeAvatar={"large"} name="Siska" status={"away"} />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Avatar'}
      subTitle="The Avatar component is commonly used in website development to visually represent users, especially in social interactions such as forums, social media, or community-based applications. It is a small image that represents a user or another entity."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `import Image from "@components/ui/Image";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    type: "image" | "alphabet";
    src?: string;
    name: string;
}

const Avatar = (props: TProps) => {
    const { className, type = "image", src, name, variant, sizeAvatar, shapeAvatar, status } = props
    return (
        <div className="relative">
            <div
                className={cn(avatarVariants({ className, variant, sizeAvatar, shapeAvatar, status }))}
            >
                {type === "image" && <Image src={src || "avatar.svg"} alt={name} className="w-full h-full object-scale-down" />}
                {type === "alphabet" && <div>{name?.substring(0, 1)}</div>}
                {
                    status && <span className={cn({
                        " absolute border-white border-2   rounded-full": true,

                    })}>
                    </span>
                }

            </div>

        </div>
    )
}

const avatarVariants = cva(
    'text-white flex  items-center justify-center w-fit font-semibold overflow-hidden [&>span]:top-0 [&>span]:right-0  [&>span]:w-[0.75rem]  [&>span]:h-[0.75rem]',
    {
        variants: {
            variant: {
                'solid-primary': 'bg-primary',
                'solid-warning': 'bg-warning',
                'solid-success': 'bg-success',
                'solid-error': 'bg-error',
                'solid-black': 'bg-black text-white',
                'solid-white': 'bg-white border text-black',


                'soft-primary': 'bg-primary-50 text-primary-700',
                'soft-warning': 'bg-warning-50 text-warning-700',
                'soft-success': 'bg-success-50 text-success-700',
                'soft-error': 'bg-error-50 text-error-700',
                'soft-gray': 'bg-gray-50 text-gray-700',

            },

            sizeAvatar: {
                'tiny': 'w-[1.625rem] h-[1.625rem] text-[12px] [&>span]:w-[0.65rem] [&>span]:h-[0.65rem]',
                'small': 'w-[2.375rem] h-[2.375rem] ',
                base: 'w-[2.875rem] h-[2.875rem] text-[16px]',
                large: 'w-[3.875rem] h-[3.875rem] text-[20px] [&>span]:top-1 [&>span]:right-1'
            },
            shapeAvatar: {
                'rounded': 'rounded-md [&>span]:-top-1 [&>span]:-right-1',
                'circular': 'rounded-full'
            },
            status: {
                'none': '',
                'offline': '[&>span]:bg-gray',
                'online': '[&>span]:bg-success ',
                'away': '[&>span]:bg-warning',
                'dont-distrub': '[&>span]:bg-error',
                'icon': ''
            }

        },
        compoundVariants: [

        ],
        defaultVariants: {
            variant: "soft-gray",
            sizeAvatar: "base",
            shapeAvatar: "circular",
        }
    }
)

export default Avatar`;

export default CardIntroAvatar;
