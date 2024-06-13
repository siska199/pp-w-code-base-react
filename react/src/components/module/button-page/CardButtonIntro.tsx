
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
            <Button variant={"solid-primary"}>SISKA</Button>
            <Button variant={"soft-primary"}>SISKA</Button>
            <Button variant={"outline-primary"}>SISKA</Button>
            <Button variant={"link-primary"}>SISKA</Button>
            <Button variant={"solid-primary"} disabled>SISKA</Button>

          </div>

          <div className="flex gap-4 ">
            <Button variant={"solid-warning"}>SISKA</Button>
            <Button variant={"soft-warning"}>SISKA</Button>
            <Button variant={"outline-warning"}>SISKA</Button>
            <Button variant={"link-warning"}>SISKA</Button>
            <Button variant={"solid-warning"} disabled>SISKA</Button>
          </div>

          <div className="flex gap-4 ">
            <Button variant={"solid-success"}>SISKA</Button>
            <Button variant={"soft-success"}>SISKA</Button>
            <Button variant={"outline-success"}>SISKA</Button>
            <Button variant={"link-success"}>SISKA</Button>
            <Button variant={"solid-success"} disabled>SISKA</Button>
          </div>

          <div className="flex gap-4 ">
            <Button variant={"solid-error"}>SISKA</Button>
            <Button variant={"soft-error"}>SISKA</Button>
            <Button variant={"outline-error"}>SISKA</Button>
            <Button variant={"link-error"}>SISKA</Button>
            <Button variant={"solid-error"} disabled>SISKA</Button>
          </div>

          <div className="flex gap-4 ">
            <Button variant={"solid-black"}>SISKA</Button>
            <Button variant={"soft-black"}>SISKA</Button>
            <Button variant={"outline-black"}>SISKA</Button>
            <Button variant={"link-black"}>SISKA</Button>
            <Button variant={"solid-black"} disabled>SISKA</Button>
          </div>

          <div className="flex gap-4 ">
            <Button variant={"solid-white"}>SISKA</Button>
          </div>


        </div>
      }]}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Button`;

export default CardButtonIntro;
