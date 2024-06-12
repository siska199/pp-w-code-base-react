
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Badge from "@components/ui/Badge";

const CardBadgeIntro = () => {
  const listExample = [
    {
      component: <div className="flex gap-2 items-center">
        <Badge label="SISKA" variant={"soft-warning"} sizeBadge={"small"} />
        <Badge label="SISKA" variant={"soft-border-success"} />
        <Badge label="SISKA" variant={"solid-black"} />
        <Badge label="SISKA" variant={"outline-error"} sizeBadge={"large"} shapeBadge={"rounded"} />
      </div>
    },
    {
      component: <div className="flex gap-2 items-center">
        <Badge label="1" shapeBadge={"circle"} variant={"soft-border-primary"} />
        <Badge label="100" shapeBadge={"circle"} variant={"soft-border-primary"} />
        <Badge label="10000" shapeBadge={"circle"} variant={"soft-border-primary"} />
        <Badge label="100000" shapeBadge={"circle"} variant={"soft-border-primary"} />
      </div>
    }
  ]
  return (
    <CardIntroComponent
      title={'Badge'}
      subTitle="Description of Badge."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Badge`;

export default CardBadgeIntro;
