
import ShowVariousCompVariant from "@components/ShowVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import HelperMessage from "@components/ui/HelperMessage";

const CardIntroHelperMessage = () => {

  const variant = {
    "error": {},
    "warning": [],
    "success": {}
  }

  const listExample = [
    {
      title: "Color",
      component: <ShowVariousCompVariant<typeof variant>
        variant={variant}
        groups={["error", "warning", "success",]}
        Component={(variant) => <HelperMessage variant={variant} message={"Siska Apriana Rifianti"} />}
        customeClass={
          {
            container: "flex-col",
            containerGroupVariant: "[&>p]:hidden"
          }
        }
        withBorder={false}
      />
    },

  ]
  return (
    <CardIntroComponent
      title={'Helper Message'}
      subTitle="The HelperMessage component is a reusable component designed to display informative messages in various styles based on different scenarios. It provides flexibility in displaying messages with different colors and styles, making it suitable for conveying feedback or guidance within a user interface."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for HelperMessage`;

export default CardIntroHelperMessage;
