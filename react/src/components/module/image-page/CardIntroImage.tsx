/* eslint-disable react/jsx-handler-names */

import { IconCart, IconLove } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Button from "@components/ui/Button";
import Image from "@components/ui/Image";
import codeStringComponent from '@lib/utils/code-string/component-ui';
import { useState } from "react";

const CardIntroImage = () => {
  const [showImageWithSkeleton, setShowImageWithSkeleton] = useState(false)
  const [showImageWithBlur, setShowImageWithBlur] = useState(false)


  const listExample = [
    {
      title: "How Image Access",
      component: <div className="flex flex-col gap-2">
        <CardVariantComp
          title={"Access image from folder assets/images by providing only the image name example : image.png"}
          withBorder={false}
          Component={<div>
            <Image src={"c1.webp"} className="h-[10rem] w-[10rem] object-cover  " customeClassName={{ container: "" }} />
          </div>}
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
    {
      title: "Image with Overlay",
      component: <div className="flex flex-col gap-2">
        <CardVariantComp
          title={""}
          withBorder={false}
          Component={<Image
            src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"}
            className="h-[10rem] w-[10rem] object-cover"
            overlay={{
              withBackdrop: true,
              content: <div className="text-white items-end flex w-full h-full p-3 gap-3">
                <Button label={<IconLove className="icon-error-fill w-[1.1rem]" />} variant={"plain"} />
                <Button label={<IconCart className="icon-gray-fill w-[1.1rem]" />} variant={"plain"} />
              </div>
            }}
          />}
        />

      </div>
    },
    {
      title: "When load Image",
      component: <div className="flex flex-col gap-2  ">
        <CardVariantComp
          title={"Use Skeleton"}
          withBorder={false}
          Component={
            <div className="flex flex-col gap-4 items-center    mx-auto">
              <Button label={showImageWithSkeleton ? "Hide Image" : "Show Image"} onClick={() => setShowImageWithSkeleton(!showImageWithSkeleton)} />
              {
                showImageWithSkeleton && <Image
                  src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"}
                  className="h-[10rem] w-[10rem] object-cover"
                  timeoutLoadImage={3600 }
                  withSkeleton={true}
                />
              }
            </div>
          }
          customeClass={{ container: "!gap-8  [&>p]:!text-left " }}
        />
        <CardVariantComp
          title={"Use Blur"}
          withBorder={false}
          Component={
            <div className="flex flex-col gap-4 items-center    mx-auto">
              <Button label={showImageWithBlur ? "Hide Image" : "Show Image"} onClick={() => setShowImageWithBlur(!showImageWithBlur)} />
              {
                showImageWithBlur && <Image
                  src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"}
                  className="h-[10rem] w-[10rem] object-cover"
                  timeoutLoadImage={3600 * 5}
                />
              }
            </div>
          }
          customeClass={{ container: "!gap-8  [&>p]:!text-left " }}
        />
      </div>
    }

  ]
  return (
    <CardIntroComponent
      title={'Image'}
      subTitle="Component Image is a component used to display images with additional features such as loading states, overlays, and skeleton loading. "
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = codeStringComponent.Image

export default CardIntroImage;
