
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Badge from "@components/ui/Badge";

const CardBadgeIntro = () => {
  return (
    <CardIntroComponent
      title={'Badge'}
      subTitle="Description of Badge."
      DisplayComponent={<Badge />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Badge`;

export default CardBadgeIntro;
