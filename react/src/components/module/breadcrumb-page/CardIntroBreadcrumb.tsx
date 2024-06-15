
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroBreadcrumb = () => {
  return (
    <CardIntroComponent
      title={'Breadcrumb'}
      subTitle="Description of Breadcrumb."
      listExample={[]}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Breadcrumb`;

export default CardIntroBreadcrumb;
