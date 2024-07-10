import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Badge from "@components/ui/Badge";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import variantBadge from "@lib/utils/variants/ui/variant-badge";

const CardIntroBadge = () => {
  const listExample = [
    {
      title: "Color",
      component: <CardVariousCompVariant<typeof variantBadge> variant={variantBadge} groups={["solid", "outline", "soft", "softborder"]} Component={(variant) => <Badge label={"Siska"} variant={variant} />} />,
    },
    {
      title: "size",
      component: (
        <div className="flex gap-2 items-center flex-wrap">
          <Badge label="Small" variant={"solid-primary"} size="small" />
          <Badge label="Base" variant={"solid-primary"} size="base" />
          <Badge label="Large" variant={"solid-primary"} size="large" />
        </div>
      ),
    },
    {
      title: "Shape",
      component: (
        <div className="flex gap-2 items-center flex-wrap">
          <Badge label="Pilled" variant={"solid-primary"} shape={"pilled"} />
          <Badge label="Rounded" variant={"solid-primary"} shape={"rounded"} />
          <Badge label="Circle" variant={"solid-primary"} shape={"circle"} />
        </div>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Badge"}
      subTitle="The Badge component in a UI (User Interface) context is used to display small pieces of information or indicators that are often visually highlighted to catch the user's attention."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Badge}
    />
  );
};

export default CardIntroBadge;
