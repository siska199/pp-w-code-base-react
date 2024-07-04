
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
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
      component: <CardVariantComp title={"Top"} Component={<Tooltip text={"tooltip message top"}>top</Tooltip>}/>
    },

    {
      component: <CardVariantComp title={"Left"} Component={<Tooltip text={"tooltip message left"} variant="left">left</Tooltip>}/>
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
