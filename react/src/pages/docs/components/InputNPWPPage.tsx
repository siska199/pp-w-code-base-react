import CardAdditionalInfoInputNPWP from "@components/module/input-page/input-npwp/CardAdditionalInfoInputNPWP";
import CardIntroInputNPWP from "@components/module/input-page/input-npwp/CardIntroInputNPWP";
import CardPropsInputNPWP from "@components/module/input-page/input-npwp/CardPropsInputNPWP";
import CardUsageInputNPWP from "@components/module/input-page/input-npwp/CardUsageInputNPWP";


const InputNPWPPage = () => {
  return (
    <>
      <CardIntroInputNPWP />
      <CardPropsInputNPWP />
      <CardUsageInputNPWP />
      <CardAdditionalInfoInputNPWP />
    </>
  );
}

export default InputNPWPPage;
