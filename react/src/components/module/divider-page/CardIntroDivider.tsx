import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Divider from "@components/ui/Divider";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroDivider = () => {
  const variantDivider = {
    "left-aligned": {},
    "center-aligned": {},
    "right-aligned": {},
  };
  const listExample = [
    {
      component: (
        <CardVariousCompVariant<typeof variantDivider>
          customeClass={{
            container: "flex-col w-full",
            containerCardVariant: "w-full",
          }}
          variant={variantDivider}
          groups={Object.keys(variantDivider)}
          isLogicSplitGroupKey={false}
          Component={(variant) => <Divider text="Siska" variant={variant} />}
          withGroupName={false}
          withBorder={false}
        />
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Divider"}
      subTitle="The Divider component in React renders a horizontal line with optional text aligned either to the left, center, or right based on the variant prop. It dynamically adjusts the position of the line and text, allowing developers to customize dimensions and text styles through props like width, height, and customeClass. This component simplifies layout design by providing flexible options for separating content visually within a webpage or application."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Divider}
    />
  );
};

export default CardIntroDivider;
