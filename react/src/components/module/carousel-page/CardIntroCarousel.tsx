
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Image from "@components/ui/Image";
import CarouselImage from "@components/ui/carousel/CarouselImage";

const CardIntroCarousel = () => {

  const listExample = [
    {
      component: <div className="w-full">
        <CarouselImage
          className="w-full"
          itemsPerView={{
            lg: 4,
            md: 2,
            sm: 1
          }}
          items={[
            <Image
              key={1}
              className=""
              src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"}
            />,
            <Image
              key={2}
              className=""
              src={"https://i.pinimg.com/736x/a7/69/e1/a769e1b88f6014ede98ab65070e493de.jpg"}
            />,
            <Image
              key={3}
              className=""
              src={"https://i.pinimg.com/736x/18/64/77/186477aac1acdac2c52714d716581508.jpg"}
            />,
            <Image
              key={1}
              className=""
              src={"https://i.pinimg.com/564x/7d/a5/84/7da58444cc2a1cc88d14cc5ae0df1b58.jpg"}
            />,
            <Image
              key={2}
              className=""
              src={"https://i.pinimg.com/564x/7d/a5/84/7da58444cc2a1cc88d14cc5ae0df1b58.jpg"}
            />,
            <Image
              key={3}
              className=""
              src={"https://i.pinimg.com/564x/7d/a5/84/7da58444cc2a1cc88d14cc5ae0df1b58.jpg"}
            />,
            <Image
              key={4}
              className=""
              src={"https://i.pinimg.com/564x/c1/31/c8/c131c80be697650f1311229b81405aa2.jpg"}
            />,
            <Image
              key={5}
              className=""
              src={"https://i.pinimg.com/736x/a7/69/e1/a769e1b88f6014ede98ab65070e493de.jpg"}
            />,
            <Image
              key={6}
              className=""
              src={"https://i.pinimg.com/736x/18/64/77/186477aac1acdac2c52714d716581508.jpg"}
            />,
          ]}
        />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Carousel'}
      subTitle="Description of Carousel."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Carousel`;

export default CardIntroCarousel;
