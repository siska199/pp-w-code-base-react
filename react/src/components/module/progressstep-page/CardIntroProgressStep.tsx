
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import ProgressStep from "@components/ui/ProgressStep";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroProgressStep = () => {
  const listStep =[...Array(5)]?.map((_,i)=>({
    title: `Step ${i+1}`,
    caption: `Siska Apriana Rifianti ${i+1}`
  }))

  const listExample = [
    {
      title:'Vertical',
      component: <div className="flex flex-col gap-2">
        <CardVariantComp
          title={"Default"}
          Component={<ProgressStep variant={"vertical"} listStep={listStep}  activeStep={2}/>}
          withBorder={false}
        />
        <CardVariantComp
          title={"Number"}
          Component={<ProgressStep variant={"vertical"} type="number" listStep={listStep}  />}
          withBorder={false}
        />
        <CardVariantComp
          title={"Timeline"}
          Component={<ProgressStep variant={"vertical"} type="timeline" listStep={listStep}  />}
          withBorder={false}
        />
      </div>
    },
    {
      title:'Horizontal',
      component:<div className="w-full ">
        <ProgressStep variant={"horizontal"} activeStep={1} listStep={listStep}  />
      </div>
    }

  ]

  return (
    <CardIntroComponent
      title={'Progress Step'}
      subTitle="The ProgressStep component is a versatile UI component designed to create step-by-step progress indicators or timelines. It allows developers to visually represent a series of steps or milestones in a process, providing flexibility in layout and styling."
      listExample={listExample }
      displayCodeBase={codeStringComponentUi.ProgressStep}
    />
  );
}


export default CardIntroProgressStep;
