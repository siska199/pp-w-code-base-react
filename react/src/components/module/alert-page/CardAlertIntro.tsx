
import CardIntro from "@components/cards/CardIntro";
import Alert from "@components/ui/Alert";

const CardAlertIntro = () => {
  return (
    <CardIntro
      title={'Alert'}
      subTitle="Description of Alert."
      DisplayComponent={<Alert />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Alert`;

export default CardAlertIntro;
