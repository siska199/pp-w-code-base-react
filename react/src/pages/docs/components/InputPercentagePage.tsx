import CardAdditionalInfoInputPercentage from "@components/module/input-page/input-percentage/CardAdditionalInfoInputPercentage";
import CardIntroInputPercentage from "@components/module/input-page/input-percentage/CardIntroInputPercentage";
import CardPropsInputPercentage from "@components/module/input-page/input-percentage/CardPropsInputPercentage";
import CardUsageInputPercentage from "@components/module/input-page/input-percentage/CardUsageInputPercentage";

const InputPercentagePage = () => {
  return (
    <>
      <CardIntroInputPercentage />
      <CardPropsInputPercentage />
      <CardUsageInputPercentage />
      <CardAdditionalInfoInputPercentage />
    </>
  );
}

export default InputPercentagePage;
