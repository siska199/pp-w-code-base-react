
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import ProgressStep from "@components/ui/ProgressStep";

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
      subTitle="Description of ProgressStep."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for ProgressStep`;

export default CardIntroProgressStep;
