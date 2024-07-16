import CardIntroComponent from "@components/cards/CardIntroComponent";
import Timeline from "@components/ui/Timeline";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroTimeline = () => {
  const listStep = [...Array(5)]?.map((_, i) => ({
    title: `Application UI code in Tailwind CSS ${i + 1}`,
    subtitle: "February 2022",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  }));

  const listExample = [
    {
      title: "Variant 1",
      component: (
        <div className="w-full overflow-x-auto ">
          <Timeline listStep={listStep} customeClass={{ containerContent: "w-[12rem] ", container: "ml-6 md:ml-0 " }} />
        </div>
      ),
    },
    {
      title: "Variant 1",
      component: (
        <div className="w-full overflow-x-auto">
          <Timeline listStep={listStep} variant="v2" />
        </div>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Timeline"}
      subTitle="A timeline component in web development typically represents a chronological sequence of events or steps. It's commonly used to visualize processes, historical events, project milestones, or any sequential data that unfolds over time. Here's an overview and some key aspects you might find in a timeline component:"
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Timeline}
    />
  );
};

export default CardIntroTimeline;
