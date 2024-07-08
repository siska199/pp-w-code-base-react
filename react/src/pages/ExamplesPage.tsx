import CarouselImage from "@components/ui/carousel/CarouselImage";
import Image from "@components/ui/Image";
import Timeline from "@components/ui/Timeline";
import dummyImage from "@lib/utils/data/dummy-image";

const ExamplesPage = () => {

  const listStep = [...Array(5)]?.map((_, i) => ({
    title: `Application UI code in Tailwind CSS ${i + 1}`,
    subtitle: 'February 2022',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'
  }))
  return (
    <div className="h-full">
      {/* 
      <Timeline listStep={listStep} />
      <Timeline listStep={listStep} variant="v2" /> */}
      <CarouselImage
        className="h-full"
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
    </div>
  );
};

export default ExamplesPage;