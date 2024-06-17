
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Image from "@components/ui/Image";

const CardIntroImage = () => {
  const listExample = [
    {
      title: "How Image Access",
      component: <div className="flex flex-col gap-2">
        <CardVariantComp
          title={"Access image from folder assets/images by providing only the image name example : image.png"}
          withBorder={false}
          Component={<Image src={"boyfriend.jpg"} className="h-[10rem] w-[10rem] object-cover  " customeClassName={{ container: "" }} />}
          customeClass={{ container: "!gap-8 [&>p]:!text-left" }}
        />
        <CardVariantComp
          title={"Access image from url "}
          withBorder={false}
          Component={<Image src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"} className="h-[10rem] w-[10rem] object-cover" />}
          customeClass={{ container: "!gap-8 [&>p]:!text-left" }}
        />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Image'}
      subTitle="Description of Image."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Image`;

export default CardIntroImage;
