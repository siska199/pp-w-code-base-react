
import CardIntroProgressStep from "@components/module/progressstep-page/CardIntroProgressStep";
import CardPropsProgressStep from "@components/module/progressstep-page/CardPropsProgressStep";
import CardUsageProgressStep from "@components/module/progressstep-page/CardUsageProgressStep";
import CardAdditionalInfoProgressStep from "@components/module/progressstep-page/CardAdditionalInfoProgressStep";

const ProgressStepPage = () => {
  return (
    <>
      <CardIntroProgressStep />
      <CardPropsProgressStep />
      <CardUsageProgressStep />
      <CardAdditionalInfoProgressStep />
    </>
  );
}

export default ProgressStepPage;
