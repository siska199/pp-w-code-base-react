import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Card, { TPropsCard } from "@components/ui/Card";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCard = () => {
  const listPropsForEachVariant: { props: TPropsCard; title: string }[] = [
    {
      title: "Body",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
      },
    },
    {
      title: "Top bordered",
      props: {
        variant: "top-bordered",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
      },
    },
    {
      title: "Heading",
      props: {
        header: {
          content: "Featured",
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
      },
    },
    {
      title: "Footer",
      props: {
        footer: "Last updated 5 mins ago",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
      },
    },
    {
      title: "Centered body content",
      props: {
        variant: "centered-body",
        body: {
          title: "Card Title",
          content: <p>Lorem ipsum dolor sit djfoshifhuehfiudiv cdusiuic nihil ipsum dolore? Error!</p>,
        },
        customeClass: {
          container: "min-h-[15rem]",
        },
      },
    },
    {
      title: "Image",
      props: {
        header: {
          image: dummyImage[4],
        },
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
        customeClass: {
          container: "w-[20rem]",
        },
      },
    },
    {
      title: "Image inside body content",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
        customeClass: {
          container: "w-[20rem]",
        },
      },
    },
    {
      title: "Link",
      props: {
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          image: dummyImage[4],
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
        customeClass: {
          container: "w-[20rem]",
        },
        link: {
          label: "Card link",
        },
      },
    },
    {
      title: "Overlay",
      props: {
        imageOverlay: dummyImage[0],
        variant: "overlay",
        body: {
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</>,
        },
        customeClass: {
          container: "w-[20rem]",
          body: {
            title: "text-white",
          },
        },
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
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>,
        },
        customeClass: {},
      },
    },
  ];
  const listExample = [
    {
      title: "",
      component: listPropsForEachVariant?.map((data, i) => (
        <CardVariantComp
          key={i}
          customeClass={{
            container: "w-full",
          }}
          title={data?.title}
          withBorder={false}
          Component={<Card {...data?.props} />}
        />
      )),
    },
  ];
  return (
    <CardIntroComponent
      title={"Card"}
      subTitle="A card component in web development typically refers to a modular UI element used to display specific content in a structured and visually appealing manner. Cards are versatile and commonly used in various contexts across websites and applications. "
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Card}
    />
  );
};

export default CardIntroCard;
