
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Image from "@components/ui/Image";
import Skeleton from "@components/ui/Skeleton";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroSkeleton = () => {

  const listExample = [
    {
      component: <div className="w-full flex flex-col gap-4">
        <CardVariantComp
          title={"Paragraph"}
          Component={
            <Skeleton isLoading={true} type={"text"}>
              <span className="">Lorem ipsum dolor corrupti quaerat distinctio, ex quas quo inventore cum? Molestiae hifssdicu isdjcisdhvo sdicsdoio iosdcoisdoic icusodcsdicjsodi.</span>
            </Skeleton>
          }
          withBorder={false}
        />
        <CardVariantComp
          title={"Image"}
          Component={
            <Skeleton isLoading={true} type={"block"}>
              <Image src={dummyImage[0]} className="w-[5rem] h-[5rem] rounded-full" />
            </Skeleton>
          }
          withBorder={false}
        />
        <CardVariantComp
          title={"Block"}
          Component={
            <Skeleton isLoading={true} type={"block"} className={"w-full"}>
              <div className="h-[4rem] w-full">
                SISKA
              </div>
            </Skeleton>
          }
          withBorder={false}
        />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Skeleton'}
      subTitle="Description of Skeleton."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Skeleton`;

export default CardIntroSkeleton;
