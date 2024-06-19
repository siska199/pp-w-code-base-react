import CardAdditionalInfoInputPhoneNumber from "@components/module/input-page/input-phone-number/CardAdditionalInfoInputPhoneNumber";
import CardIntroInputPhoneNumber from "@components/module/input-page/input-phone-number/CardIntroInputPhoneNumber";
import CardPropsInputPhoneNumber from "@components/module/input-page/input-phone-number/CardPropsInputPhoneNumber";
import CardUsageInputPhoneNumber from "@components/module/input-page/input-phone-number/CardUsageInputPhoneNumber";


const InputPhoneNumberPage = () => {
  return (
    <>
      <CardIntroInputPhoneNumber />
      <CardPropsInputPhoneNumber />
      <CardUsageInputPhoneNumber />
      <CardAdditionalInfoInputPhoneNumber />
    </>
  );
}

export default InputPhoneNumberPage;
