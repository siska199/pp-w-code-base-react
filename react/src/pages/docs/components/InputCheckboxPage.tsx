import CardAdditionalInfoInputCheckbox from "@components/module/input-page/input-checkbox/CardAdditionalInfoInputCheckbox";
import CardIntroInputCheckbox from "@components/module/input-page/input-checkbox/CardIntroInputCheckbox";
import CardPropsInputCheckbox from "@components/module/input-page/input-checkbox/CardPropsInputCheckbox";
import CardUsageInputCheckbox from "@components/module/input-page/input-checkbox/CardUsageInputCheckbox";

const InputCheckboxPage = () => {
  return (
    <>
      <CardIntroInputCheckbox />
      <CardPropsInputCheckbox />
      <CardUsageInputCheckbox />
      <CardAdditionalInfoInputCheckbox />
    </>
  );
}

export default InputCheckboxPage;
