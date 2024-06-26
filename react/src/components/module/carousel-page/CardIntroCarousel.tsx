
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Container from "@components/ui/Container";
import Image from "@components/ui/Image";
import CarouselImage from "@components/ui/carousel/CarouselImage";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCarousel = () => {

  const listExample = [
    {
      component: <Container variant={"hcc"}>
        <CarouselImage
          className="w-[30rem] h-[30rem]"
          itemsPerView={{
            lg: 1,
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
