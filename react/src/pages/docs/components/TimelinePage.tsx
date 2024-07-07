
import CardIntroTimeline from "@components/module/timeline-page/CardIntroTimeline";
import CardPropsTimeline from "@components/module/timeline-page/CardPropsTimeline";
import CardUsageTimeline from "@components/module/timeline-page/CardUsageTimeline";
import CardAdditionalInfoTimeline from "@components/module/timeline-page/CardAdditionalInfoTimeline";

const TimelinePage = () => {
  return (
    <>
      <CardIntroTimeline />
      <CardPropsTimeline />
      <CardUsageTimeline />
      <CardAdditionalInfoTimeline />
    </>
  );
}

export default TimelinePage;
