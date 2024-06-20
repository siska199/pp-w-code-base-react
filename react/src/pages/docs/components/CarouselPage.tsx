
import CardIntroCarousel from "@components/module/carousel-page/CardIntroCarousel";
import CardPropsCarousel from "@components/module/carousel-page/CardPropsCarousel";
import CardUsageCarousel from "@components/module/carousel-page/CardUsageCarousel";
import CardAdditionalInfoCarousel from "@components/module/carousel-page/CardAdditionalInfoCarousel";

const CarouselPage = () => {
  return (
    <>
      <CardIntroCarousel />
      <CardPropsCarousel />
      <CardUsageCarousel />
      <CardAdditionalInfoCarousel />
    </>
  );
}

export default CarouselPage;
