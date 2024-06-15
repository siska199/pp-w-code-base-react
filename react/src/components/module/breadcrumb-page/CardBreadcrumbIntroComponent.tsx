
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardBreadcrumbIntro = () => {
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

export default CardBreadcrumbIntro;
