
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
            <div className="flex flex-col gap-2">
              <span className="">Lorem ipsum dolor corrupti quaerat distinctio, ex quas quo inventore cum? Molestiae hifssdicu isdjcisdhvo sdicsdoio iosdcoisdoic icusodcsdicjsodi.</span>

              <Skeleton isLoading={true} type={"text"} >
                <span className="">Lorem ipsum dolor corrupti quaerat distinctio, ex quas quo inventore cum? Molestiae hifssdicu isdjcisdhvo sdicsdoio iosdcoisdoic icusodcsdicjsodi.</span>
              </Skeleton>
            </div>
          }
          withBorder={false}
        />
        <CardVariantComp
          title={"Image"}
          Component={
            <div className="flex flex-col gap-2">
              <Image src={dummyImage[0]} className="w-[5rem] h-[5rem] rounded-full" />

              <Skeleton isLoading={true} type={"block"}>
                <Image src={dummyImage[0]} className="w-[5rem] h-[5rem] rounded-full" />
              </Skeleton>
            </div>
          }
          withBorder={false}
        />
        <CardVariantComp
          title={"Block"}
          Component={
            <div className="flex flex-col gap-2 w-full">
              <div className="h-[4rem] w-full text-primary-700 bg-primary-50 border p-2 border-primary-100">
                SISKA Apriana Rifianti
              </div>
              <Skeleton isLoading={true} type={"block"} className={"w-full"}>
                <div className="h-[4rem] w-full">
                  SISKA
                </div>
              </Skeleton>
            </div>
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
