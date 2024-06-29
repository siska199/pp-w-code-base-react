
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Card, { TPropsCard } from "@components/ui/Card";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCard = () => {
  const listPropsForEachVariant: ({ props: TPropsCard; title: string })[] = [
    {
      title: "Body",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Top bordered",
      props: {
        variant: "top-bordered",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Heading",
      props: {
        header: {
          content: "Featured"
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Footer",
      props: {
        footer: "Last updated 5 mins ago",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }
      }
    },
    {
      title: "Centered body content",
      props: {
        variant: "centered-body",
        body: {
          title: "Card Title",
          content: <p>Lorem ipsum dolor sit djfoshifhuehfiudiv cdusiuic nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "min-h-[15rem]"
        }
      }
    },
    {
      title: "Image",
      props: {
        header: {
          image: dummyImage[4]
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        }
      }
    },
    {
      title: "Image inside body content",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        }
      }
    },
    {
      title: "Link",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
          container: "w-[20rem]"
        },
        link: {
          label: 'Card link'
        }
      }
    },
    {
      title: "Overlay",
      props: {
        imageOverlay: dummyImage[0],
        variant: "overlay",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</>
        },
        customeClass: {
          container: "w-[20rem]",
          body: {
            title: "text-white",
          }
        }
      },
    },
    {
      title: "Horizontal",
      props: {
        layout: "horizontal",
        header: {
          image: dummyImage[8],
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        },
        customeClass: {
        }
      }
    },
  ]
  const listExample = [
    {
      title: "",
      component: listPropsForEachVariant?.map((data, i) => <CardVariantComp
        key={i}
        customeClass={{
          container: 'w-full'
        }}
        title={data?.title}
        withBorder={false}
        Component={<Card {...data?.props}

        />}
      />)
    },

  ]
  return (
    <CardIntroComponent
      title={'Card'}
      subTitle="A card component in web development typically refers to a modular UI element used to display specific content in a structured and visually appealing manner. Cards are versatile and commonly used in various contexts across websites and applications. "
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `import { IconChevronRight } from "@assets/icons";
import Button from "@components/ui/Button";
import Image from "@components/ui/Image";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLProps } from "react";

export interface TPropsCard extends Omit<Partial<HTMLProps<HTMLDivElement>>, "title" | "children" | "content">, VariantProps<typeof cardVariants> {
    layout?: "vertical" | "horizontal";
    variant?: "top-bordered" | "centered-body" | "overlay";
    imageOverlay?: string;
    header?: {
        image?: string;
        content?: React.ReactNode | string;
    };
    body?: {
        title?: React.ReactNode | string;
        subtitle?: React.ReactNode | string;
        image?: string;
        content?: React.ReactNode | string;
    };
    footer?: React.ReactNode | string;
    link?: {
        label?: string;
        to?: string;
    };
    customeClass?: {
        imageOverlay?: string;
        container?: string;
        header?: {
            image?: string;
            content?: string;
        };
        body?: {
            title?: string;
            subtitle?: string;
            image?: string;
            content?: string;
        };
        footer?: string;
    };
    fit?: boolean;

}

const Card: React.FC<TPropsCard> = (props) => {
    return (
        props.variant === "overlay" ? <Image className={props?.customeClass?.imageOverlay} customeClassName={{ container: "rounded-xl border", containerOverlay: "opacity-100 translate-y-0 !items-start !justify-start" }} src={props?.imageOverlay || ""} withOverlay={true} overlayContent={<CardFill {...props} />} /> : <CardFill {...props} />

    );
};
const CardFill = (props: TPropsCard) => {
    const {
        layout = "vertical",
        header,
        body,
        footer,
        customeClass = {},
        variant,
        fit = true,
        className,
        link,
        ...otherProps
    } = props
    return <div className={cn(cardVariants({ layout, variant, fit }), customeClass.container, className)} {...otherProps}>
        {/* HEADER */}
        {header && (
            <div className={cn("header", customeClass.header?.content)}>
                {header.content && <div className="bg-gray-50 p-4 border-b">{header.content}</div>}
                {header.image && <Image src={header.image} className={cn("image-header h-full w-full", customeClass.header?.image)} />}
            </div>
        )}

        {/* BODY */}
        {body && <div className="p-4 flex flex-col gap-3 body">
            {body.image && <Image src={body.image} className={\`\${customeClass.body?.image} h-[15rem]\`} />}
            {(body.title || body.subtitle) && (
                <div className="flex flex-col gap-2">
                    {body.title && (
                        <div className={cn("body-title font-bold p-0 text-black text-body-large leading-none", customeClass.body?.title)}>
                            {body.title}
                        </div>
                    )}
                    {body.subtitle && <p className={cn(" body-subtitle font-medium leading-none", customeClass.body?.subtitle)}>{body.subtitle}</p>}
                </div>
            )}
            {body.content && (
                <div className={cn("body-content", customeClass.body?.content)}>
                    {body.content}
                </div>
            )}
            <div>
                {
                    link && <Button label={<div className="flex items-center">Card Link <IconChevronRight className="icon-primary w-[1rem] mt-[0.1rem]" /></div>}  customeElement="link" to={link?.to || ""} className="font-medium flex w-fit" />

                }
            </div>
        </div>}

        {/* FOOTER */}
        {footer && (
            <div className={cn("mb-auto p-4 text-gray bg-gray-50", customeClass.footer)}>
                {footer}
            </div>
        )}
    </div>
}


const cardVariants = cva(
    'border rounded-xl flex overflow-hidden bg-white',
    {
        variants: {
            layout: {
                vertical: "flex-col [&_.image-header]:h-[15rem]",
                horizontal: "flex-row [&_.header]:min-h-full [&_.header]:min-w-[40%]"
            },
            variant: {
                "overlay": "!bg-transparent !border-none [&_.body-subtitle]:text-white  [&_p]:text-white [&_div]:text-white",
                "top-bordered": "border-t-[4px] border-t-primary  ",
                "centered-body": '[&>div]:my-auto [&_.body-title]:text-center  [&_.body-subtitle]:text-center [&_.body-content_p]:text-center [&_.body-content]:text-center [&_.body-content_div]:text-center  [&_.body]:flex [&_.body]:flex-col [&_.body]:items-center [&_.body]:justify-center'
            },
            fit: {
                true: "w-fit",
                false: "w-full"
            },
        },
        compoundVariants: [],
        defaultVariants: {
            layout: "vertical"
        }
    }
);

export default Card;`;

export default CardIntroCard;
