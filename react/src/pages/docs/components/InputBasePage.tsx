import CardAdditionalInfoInputBase from "@components/module/input-page/input-base/CardAdditionalInfoInputBase";
import CardIntroInputBase from "@components/module/input-page/input-base/CardIntroInputBase";
import CardPropsInputBase from "@components/module/input-page/input-base/CardPropsInputBase";
import CardUsageInputBase from "@components/module/input-page/input-base/CardUsageInputBase";

const InputBasePage = () => {
  return (
    <>
      <CardIntroInputBase />
      <CardPropsInputBase />
      <CardUsageInputBase />
      <CardAdditionalInfoInputBase />
    </>
  );
}

export default InputBasePage;
