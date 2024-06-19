import CardAdditionalInfoInputSelect from "@components/module/input-page/input-select/CardAdditionalInfoInputSelect";
import CardIntroInputSelect from "@components/module/input-page/input-select/CardIntroInputSelect";
import CardPropsInputSelect from "@components/module/input-page/input-select/CardPropsInputSelect";
import CardUsageInputSelect from "@components/module/input-page/input-select/CardUsageInputSelect";

const InputSelectPage = () => {
  return (
    <>
      <CardIntroInputSelect />
      <CardPropsInputSelect />
      <CardUsageInputSelect />
      <CardAdditionalInfoInputSelect />
    </>
  );
}

export default InputSelectPage;
