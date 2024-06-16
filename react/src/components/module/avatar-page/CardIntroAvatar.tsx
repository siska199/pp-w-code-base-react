
import ShowVariousCompVariant from "@components/ShowVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";
import variantsAvatar from "@lib/utils/variants/ui/variant-avatar";

const CardIntroAvatar = () => {

  console.log(Object.keys(variantsAvatar.shape))
  const listExample = [
    {
      component: <ShowVariousCompVariant<typeof variantsAvatar.variant>
        variant={variantsAvatar.variant}
        groups={["solid", "outline", "soft",]}
        Component={(variant) => <Avatar type="initial-name" variant={variant} name="Siska" />}
      />
    },
    {
      title: 'Size',
      component: <ShowVariousCompVariant<typeof variantsAvatar.size>
        variant={variantsAvatar.size}
        groups={Object.keys(variantsAvatar.size)}
        Component={(size) => <Avatar type="initial-name" variant={"solid-primary"} size={size} name="Siska" />}
      />
    },
    {
      title: 'Shape',
      component: <ShowVariousCompVariant<typeof variantsAvatar.shape>
        variant={variantsAvatar.shape}
        groups={Object.keys(variantsAvatar.shape)}
        Component={(shape) => <Avatar type="initial-name" variant={"solid-primary"} shape={shape} name="Siska" />}
      />
    },
    {
      title: 'Status',
      component: <ShowVariousCompVariant<typeof variantsAvatar.status>
        variant={variantsAvatar.status}
        groups={Object.keys(variantsAvatar.status)}
        Component={(status) => <Avatar type="initial-name" variant={"solid-primary"} status={status} name="Siska" />}
      />
    }

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
import variant from "@lib/utils/data/variant-color";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";
import { avatarVariants } from '../../ui/Avatar';

interface TPropsImage {
    type: "image";
    src: string;
}

interface TInitialName {
    type: "initial-name";
    name: string;
}

type TProps = Omit<Partial<HTMLProps<HTMLDivElement>>, "size" | "shape"> & VariantProps<typeof avatarVariants> & {
    customeIcon?: React.ReactNode
} & (TPropsImage | TInitialName)


const Avatar = (props: TProps) => {
    const { className, type = "image", customeIcon, src, name, variant, size, shape, status } = props
    let updateVariant = variant || "soft-gray"
    if (!variant && type === "image") {
        updateVariant = "solid-black"
    }

    return (
        <div className="relative">
            <div
                className={cn(avatarVariants({ className, variant: updateVariant, size, shape, status }))}
            >
                {type === "image" && <Image src={src || "avatar.svg"} alt={name} className=" w-full h-full object-scale-down" />}
                {type === "initial-name" && <div>{name?.substring(0, 1)}</div>}
                {
                    ["online", "offline", "dontdistrub", "away"]?.includes(status || "") && <span className={cn({
                        " absolute border-white border-2   rounded-full": true,
                    })}>
                    </span>
                }
                {
                    customeIcon && status === "icon" && <span className="absolute top-2 right-2">{customeIcon}</span>
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
                ...variant
            },

            size: {
                'tiny': 'w-[1.625rem] h-[1.625rem] text-[12px] [&>span]:w-[0.65rem] [&>span]:h-[0.65rem]',
                'small': 'w-[2.375rem] h-[2.375rem] ',
                base: 'w-[2.875rem] h-[2.875rem] text-[16px]',
                large: 'w-[3.875rem] h-[3.875rem] text-[20px] [&>span]:top-1 [&>span]:right-1'
            },
            shape: {
                'rounded': 'rounded-md [&>span]:-top-1 [&>span]:-right-1',
                'circular': 'rounded-full'
            },
            status: {
                'offline': '[&>span]:bg-gray',
                'online': '[&>span]:bg-success ',
                'away': '[&>span]:bg-warning',
                'dontdistrub': '[&>span]:bg-error',
                icon: '[&>span]:bg-transparent'
            }

        },
        compoundVariants: [

        ],
        defaultVariants: {
            variant: "soft-gray",
            size: "base",
            shape: "circular",
        }
    }
)

export default Avatar`

export default CardIntroAvatar;
