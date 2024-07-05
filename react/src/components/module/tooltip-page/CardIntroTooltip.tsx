
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Tooltip from "@components/ui/Tooltip";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroTooltip = () => {
  const variantTooltip = {
    "top": {},
    "bottom": {},
    "left": {},
    "right": {}
  }

  const listExample = [
    {
      component: (
        <CardVariousCompVariant
          customeClass={{
            container: "flex-col w-full",
            containerCardVariant: "w-full"
          }}
          variant={variantTooltip}
          groups={Object.keys(variantTooltip)}
          isLogicSplitGroupKey={false}
          Component={(variant) => <Tooltip text={`${variant}-tooltip message`} variant={variant}>{variant}</Tooltip>} //customeClass={{tooltip:"hover:before:min-w-[10rem]"}}
          withGroupName={false}
          withBorder={false}
        />
      )
    },

  ]
  return (
    <CardIntroComponent
      title={'Tooltip'}
      subTitle="A component tooltip is a user interface element typically used in software applications, websites, or graphical user interfaces (GUIs). Its primary function is to provide additional information or context about a specific UI component when the user interacts with it, usually by hovering over or clicking on the component."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Tooltip}
    />
  );
}

export default CardIntroTooltip;
