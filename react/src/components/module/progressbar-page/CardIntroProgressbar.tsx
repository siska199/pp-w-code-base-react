
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Progressbar from "@components/ui/Progressbar";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroProgressbar = () => {

  const variantPorgressbar= {
    "base": {},
    "bottom-floating-label": {},
    "within-progress-bar": {},
    "title-label":{},
    "trailing-label":{},
    "top-floating-label": {},
  }

  const listExample = [
    {
      component:  <CardVariousCompVariant<typeof variantPorgressbar>
      customeClass={{
        container: "flex-col w-full",
        containerCardVariant: "w-full"
      }}
      variant={variantPorgressbar}
      groups={Object.keys(variantPorgressbar)}
      isLogicSplitGroupKey={false}
      Component={(variant) => <Progressbar variant={variant} value={50} />}
      withGroupName={false}
      withBorder={false}
    />
    },

  ]
  return (
    <CardIntroComponent
      title={'Progressbar'}
      subTitle="The Progressbar component is a visual element commonly used in user interfaces to indicate the progress of a task or process. It provides a graphical representation of completion, typically as a horizontal bar that fills up gradually from left to right."
      listExample={listExample }
      displayCodeBase={codeStringComponentUi.Progressbar}
    />
  );
}

export default CardIntroProgressbar;
