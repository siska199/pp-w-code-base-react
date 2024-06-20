import CardAdditionalInfoInputMultipleCheckbox from "@components/module/input-page/input-multiple-checkbox/CardAdditionalInfoInputMultipleCheckbox";
import CardIntroInputMultipleCheckbox from "@components/module/input-page/input-multiple-checkbox/CardIntroInputMultipleCheckbox";
import CardPropsInputMultipleCheckbox from "@components/module/input-page/input-multiple-checkbox/CardPropsInputMultipleCheckbox";
import CardUsageInputMultipleCheckbox from "@components/module/input-page/input-multiple-checkbox/CardUsageInputMultipleCheckbox";

const InputMultipleCheckboxPage = () => {
  return (
    <>
      <CardIntroInputMultipleCheckbox />
      <CardPropsInputMultipleCheckbox />
      <CardUsageInputMultipleCheckbox />
      <CardAdditionalInfoInputMultipleCheckbox />
    </>
  );
}

export default InputMultipleCheckboxPage;
