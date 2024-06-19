
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Image from "@components/ui/Image";
import CarouselImage from "@components/ui/carousel/CarouselImage";

const CardIntroCarousel = () => {

  const listExample = [
    {
      component: <div className="w-full">
        <CarouselImage
          className="w-[30rem] h-[30rem]"
          itemsPerView={{
            lg: 3,
            md: 2,
            sm: 1
          }}
          items={[
            <Image
              key={1}
              src={"https://i.pinimg.com/736x/58/2c/03/582c03f50ddf1244ecb25d66a309d0de.jpg"}
            />,
            <Image
              key={2}
              src={"https://i.pinimg.com/564x/11/57/f5/1157f548e33835f5767a785d0b6c9566.jpg"}
            />,
            <Image
              key={3}
              src={"https://i.pinimg.com/564x/e3/c8/62/e3c8626c136299447b59ba5bbbb86de7.jpg"}
            />,
            <Image
              key={4}
              src={"https://i.pinimg.com/564x/54/0c/08/540c0816d604ea000f14fb856515ed9c.jpg"}
            />,
            <Image
              key={5}
              src={"https://i.pinimg.com/564x/7d/97/6d/7d976db9ea897e6b695ac09077abf797.jpg"}
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
