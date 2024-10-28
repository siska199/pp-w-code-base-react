import CardIntroComponent from "@components/cards/CardIntroComponent";
import Container from "@components/ui/Container";
import Image from "@components/ui/Image";
import CarouselImage from "@components/ui/carousel/CarouselImage";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import dummyImage from "@lib/utils/data/dummy-image";

const CardIntroCarousel = () => {
  const listExample = [
    {
      component: (
        <Container variant={"hcc"} className="overflow-auto w-full">
          <CarouselImage
            className="h-[30rem]"
            itemsPerView={{
              lg: 1,
              md: 1,
              sm: 1,
            }}
            items={[<Image key={1} src={dummyImage[0]} />, <Image key={2} src={dummyImage[1]} />, <Image key={3} src={dummyImage[2]} />, <Image key={4} src={dummyImage[3]} />, <Image key={5} src={dummyImage[4]} />, <Image key={6} src={dummyImage[5]} />]}
          />
        </Container>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Carousel"}
      subTitle="A carousel component, also known as a slideshow or image slider, is a common UI element used to cycle through a series of content, such as images, text, or other elements. Carousels can be used in various contexts like displaying product images on an e-commerce site, highlighting key features or news, or showcasing portfolio items."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.CarouselImage}
    />
  );
};

export default CardIntroCarousel;
