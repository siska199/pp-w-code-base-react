import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageCarousel = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Carousel:</p>
      <CodeBlock codeString={generateDisplayComponent("Carousel", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `
  const dummyImage = [
    "https://i.pinimg.com/736x/22/54/03/22540381a0bb28c0823dcc0c34a0ad72.jpg",
    "https://i.pinimg.com/564x/06/b6/ef/06b6ef2a183ee70bfedba85bb24931ea.jpg",
    "https://i.pinimg.com/736x/39/f0/6c/39f06cf316484b2f585c0ba1bfee8039.jpg",
    "https://i.pinimg.com/564x/2e/9d/d7/2e9dd78bed90eccb4eeb99bff613c2e8.jpg",
    "https://i.pinimg.com/564x/f3/b6/db/f3b6dba4edce10df6668ef52068dd486.jpg",
    "https://i.pinimg.com/564x/cd/2d/47/cd2d47f6c4706e44d81597efdc3101b5.jpg",
  ]

  return <CarouselImage
    className="h-[30rem]"
    itemsPerView={{
      lg: 3,
      md: 2,
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
`;

export default CardUsageCarousel;
