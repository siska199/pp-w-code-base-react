
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Container from "@components/ui/Container";
import Image from "@components/ui/Image";
import CarouselImage from "@components/ui/carousel/CarouselImage";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCarousel = () => {

  const listExample = [
    {
      component: <Container variant={"hcc"} className="overflow-auto w-full">
        <CarouselImage
          className="h-[30rem]"
          itemsPerView={{
            lg: 3,
            md: 1,
            sm: 1
          }}
          items={[
            <Image
              key={1}
              src={dummyImage[0]}
            />,
            <Image
              key={2}
              src={dummyImage[1]}
            />,
            <Image
              key={3}
              src={dummyImage[2]}
            />,
            <Image
              key={4}
              src={dummyImage[3]}
            />,
            <Image
              key={5}
              src={dummyImage[4]}
            />,
            <Image
              key={6}
              src={dummyImage[5]}
            />,
          ]}
        />
      </Container>
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
