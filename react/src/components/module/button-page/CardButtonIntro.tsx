
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Button from "@components/ui/Button";

const CardButtonIntro = () => {
  return (
    <CardIntroComponent
      title={'Button'}
      subTitle="Description of Button."
      listExample={[{
        component: <div className="flex flex-col gap-4">
          <div className="flex gap-4 focus:!ring-warning-200">
            <Button variant={"solid-primary"} label={'Siska'} />


          </div>


        </div>
      }]}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Button`;

export default CardButtonIntro;
