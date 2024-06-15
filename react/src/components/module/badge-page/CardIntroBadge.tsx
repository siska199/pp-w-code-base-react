
import ShowVariousCompVariant from "@components/ShowVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Badge from "@components/ui/Badge";
import { variantBadge } from "@lib/utils/data/variant-color";

const CardIntroBadge = () => {
  const listExample = [
    {
      title: "Color",
      component: <ShowVariousCompVariant<typeof variantBadge>
        variant={variantBadge}
        groups={["solid", "outline", "soft", "softborder"]}
        Component={(variant) => <Badge label={"Siska"} variant={variant} />}
      />
    },
    {
      title: "size",
      component: <div className="flex gap-2 items-center flex-wrap">
        <Badge label="Small" variant={"solid-primary"} size="small" />
        <Badge label="Base" variant={"solid-primary"} size="base" />
        <Badge label="Large" variant={"solid-primary"} size="large" />
      </div>
    },
    {
      title: "Shape",
      component: <div className="flex gap-2 items-center flex-wrap">
        <Badge label="Pilled" variant={"solid-primary"} shape={"pilled"} />
        <Badge label="Rounded" variant={"solid-primary"} shape={"rounded"} />
        <Badge label="Circle" variant={"solid-primary"} shape={"circle"} />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Badge'}
      subTitle="The Badge component in a UI (User Interface) context is used to display small pieces of information or indicators that are often visually highlighted to catch the user's attention."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `import variant from "@lib/utils/data/variant-color";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";

interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  customeElement?: React.ReactNode;

}

const Badge = (props: TProps) => {
  const { label, className, variant, customeElement, shapeBadge, sizeBadge, ...attrs } = props
  return (
    <span className={cn(badgeVariants({ className, variant, shapeBadge, sizeBadge }))} {...attrs}>
      {label}
      {customeElement}
    </span>
  )
}


const badgeVariants = cva(
  'w-fit font-medium bg-white h-fit text-white flex-inline gap-1 text-center font-medium rounded items-center justify-center',
  {
    variants: {
      variant: variant,
      sizeBadge: {
        small: "!text-[10px] px-2 py-1",
        base: "!text-[12px] px-1 py-1",
        large: "!text-[14px] px-3 py-2"
      },

      shapeBadge: {
        pilled: "rounded-full",
        rounded: "rounded-md",
        circle: "rounded-full !aspect-square min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center"
      },

    },

    defaultVariants: {
      variant: "soft-primary",
      sizeBadge: "base",
      shapeBadge: "pilled"
    }
  }
)


export default Badge`;



export default CardIntroBadge;
