import CardAdditionalInfoInputRadioButton from "@components/module/input-page/input-radio-button/CardAdditionalInfoInputRadioButton";
import CardIntroInputRadioButton from "@components/module/input-page/input-radio-button/CardIntroInputRadioButton";
import CardPropsInputRadioButton from "@components/module/input-page/input-radio-button/CardPropsInputRadioButton";
import CardUsageInputRadioButton from "@components/module/input-page/input-radio-button/CardUsageInputRadioButton";


const InputRadioButtonPage = () => {
  return (
    <>
      <CardIntroInputRadioButton />
      <CardPropsInputRadioButton />
      <CardUsageInputRadioButton />
      <CardAdditionalInfoInputRadioButton />
    </>
  );
}

export default InputRadioButtonPage;
