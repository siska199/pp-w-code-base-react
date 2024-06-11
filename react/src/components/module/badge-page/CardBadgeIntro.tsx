
import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";

const CardBadgeIntro = () => {
  return (
    <CardIntro
      title={'Badge'}
      subTitle="Description of Badge."
      DisplayComponent={<Badge />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Badge`;

export default CardBadgeIntro;
