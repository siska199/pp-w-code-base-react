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

const displayUsage ="\n  const dummyImage = [\n    \"https://i.pinimg.com/736x/22/54/03/22540381a0bb28c0823dcc0c34a0ad72.jpg\",\n    \"https://i.pinimg.com/564x/06/b6/ef/06b6ef2a183ee70bfedba85bb24931ea.jpg\",\n    \"https://i.pinimg.com/736x/39/f0/6c/39f06cf316484b2f585c0ba1bfee8039.jpg\",\n    \"https://i.pinimg.com/564x/2e/9d/d7/2e9dd78bed90eccb4eeb99bff613c2e8.jpg\",\n    \"https://i.pinimg.com/564x/f3/b6/db/f3b6dba4edce10df6668ef52068dd486.jpg\",\n    \"https://i.pinimg.com/564x/cd/2d/47/cd2d47f6c4706e44d81597efdc3101b5.jpg\",\n  ]\n\n  return <CarouselImage\n    className=\"h-[30rem]\"\n    itemsPerView={{\n      lg: 3,\n      md: 2,\n      sm: 1\n    }}\n    items={[\n      <Image\n        key={1}\n        src={dummyImage[0]}\n      />,\n      <Image\n        key={2}\n        src={dummyImage[1]}\n      />,\n      <Image\n        key={3}\n        src={dummyImage[2]}\n      />,\n      <Image\n        key={4}\n        src={dummyImage[3]}\n      />,\n      <Image\n        key={5}\n        src={dummyImage[4]}\n      />,\n      <Image\n        key={6}\n        src={dummyImage[5]}\n      />,\n    ]}\n  />\n"


export default CardUsageCarousel;
