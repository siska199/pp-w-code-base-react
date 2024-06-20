import CardAdditionalInfoInputDate from "@components/module/input-page/input-date/CardAdditionalInfoInputDate";
import CardIntroInputDate from "@components/module/input-page/input-date/CardIntroInputDate";
import CardPropsInputDate from "@components/module/input-page/input-date/CardPropsInputDate";
import CardUsageInputDate from "@components/module/input-page/input-date/CardUsageInputDate";


const InputDatePage = () => {
  return (
    <>
      <CardIntroInputDate />
      <CardPropsInputDate />
      <CardUsageInputDate />
      <CardAdditionalInfoInputDate />
    </>
  );
}

export default InputDatePage;
