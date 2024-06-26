
import CardIntroProgressbar from "@components/module/progressbar-page/CardIntroProgressbar";
import CardPropsProgressbar from "@components/module/progressbar-page/CardPropsProgressbar";
import CardUsageProgressbar from "@components/module/progressbar-page/CardUsageProgressbar";
import CardAdditionalInfoProgressbar from "@components/module/progressbar-page/CardAdditionalInfoProgressbar";

const ProgressbarPage = () => {
  return (
    <>
      <CardIntroProgressbar />
      <CardPropsProgressbar />
      <CardUsageProgressbar />
      <CardAdditionalInfoProgressbar />
    </>
  );
}

export default ProgressbarPage;
