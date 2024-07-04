
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Tooltip from "@components/ui/Tooltip";

const CardIntroTooltip = () => {
  const variantTooltip = {
    "top" :{},
    "bottom":{},
    "left":{},
    "right":{}
  }

  const listExample = [
    {
      component: (
        <CardVariousCompVariant
          customeClass={{
            container: "flex-col w-full",
            containerCardVariant: "w-full"
          }}
          variant={variantTooltip }
          groups={Object.keys(variantTooltip )}
          isLogicSplitGroupKey={false}
          Component={(variant) => <Tooltip text={variant} variant={variant}>{variant} Siska Apriana Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum vel corporis, laudantium eveniet consequatur exercitationem nulla nobis deleniti modi.</Tooltip>}
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
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Tooltip`;

export default CardIntroTooltip;
