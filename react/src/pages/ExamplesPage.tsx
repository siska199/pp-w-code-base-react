import Timeline from "@components/ui/Timeline";

const ExamplesPage = () => {

  const listStep = [...Array(5)]?.map((_, i) => ({
    title: `Application UI code in Tailwind CSS ${i + 1}`,
    subtitle: 'February 2022',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'
  }))
  return (
    <div className="h-full">

      <Timeline listStep={listStep} />
    </div>
  );
};

export default ExamplesPage;