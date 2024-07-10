import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Breadcrumb from "@components/ui/Breadcrumb";
import listMenuNavbar from "@lib/utils/data/menu-navbar";

const CardIntroBreadcrumb = () => {
  const listExample = [
    {
      title: "",
      component: (
        <div className="flex flex-col ">
          <CardVariantComp title={"Default"} Component={<Breadcrumb items={listMenuNavbar} activeItem={0} />} withBorder={false} />
          <CardVariantComp title={"No Divider"} Component={<Breadcrumb items={listMenuNavbar} withIconDivider={false} activeItem={1} />} withBorder={false} />
          <CardVariantComp title={"Custome Icon Divider"} Component={<Breadcrumb items={listMenuNavbar} customeIconDivider={"/"} activeItem={2} />} withBorder={false} />
        </div>
      ),
    },
  ];

  return (
    <CardIntroComponent
      title={"Breadcrumb"}
      subTitle="A breadcrumb component is used as navigational aid that visually shows the user's location within a website or application hierarchy. It typically appears as a horizontal trail of links, usually at the top of a page or section, indicating the path from the homepage or main menu to the current page or location."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
};

const displayCodeBase = `import { IconChevronRight } from "@assets/icons";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";
import Button from "./Button";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof breadcrumbVariants> {
    items: {
        url: string;
        label: string | React.ReactNode;
    }[];

    customeIconDivider?: React.ReactNode;
    withIconDivider?: boolean;
    customeClass?: {
        active?: string;
    }

    activeItem?: number;
}

const Breadcrumb = (props: TProps) => {
    const { className, items, customeIconDivider, activeItem, customeClass, withIconDivider = true, ...otherProps } = props;



    return (
        <div
            className={cn(breadcrumbVariants({
                className: "${"className"} ${!"withIconDivider" && "gap-4"}"
            }))}
            {...otherProps}
        >

            {
                items?.map((item, i) => <div key={i} className="flex items-center">
                    <Button key={i}
                        label={
                            <div className="flex">
                                {item?.label}
                                {
                                    withIconDivider && <span className="px-2 ">{(customeIconDivider ?? <IconChevronRight className="" />)}</span>
                                }
                            </div>
                        }
                        customeElement={"link"}
                        className={cn({
                            "!p-0 !py-1 !flex": true,
                            ["!font - medium ${"customeClass?.active" || ""}" ]: location.pathname === item?.url || activeItem === i
                        })}
                        variant={"link-black"}
                        to={item?.url} />
                </div>)
            }

        </div >
    )
}

const breadcrumbVariants = cva(
    'flex gap-0',
    {
        variants: {
            variant: {
                // Define your variants here
            },
            // Add more variant options here
        },
        compoundVariants: [
            // Define compound variants here
        ],
        defaultVariants: {
            // Define default variants here
        }
    }
)

export default Breadcrumb;`;

export default CardIntroBreadcrumb;
