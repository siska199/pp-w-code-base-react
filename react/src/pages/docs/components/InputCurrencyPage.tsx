import CardAdditionalInfoInputCurrency from "@components/module/input-page/input-currency/CardAdditionalInfoInputCurrency";
import CardIntroInputCurrency from "@components/module/input-page/input-currency/CardIntroInputCurrency";
import CardPropsInputCurrency from "@components/module/input-page/input-currency/CardPropsInputCurrency";
import CardUsageInputCurrency from "@components/module/input-page/input-currency/CardUsageInputCurrency";


const InputCurrencyPage = () => {
  return (
    <>
      <CardIntroInputCurrency />
      <CardPropsInputCurrency />
      <CardUsageInputCurrency />
      <CardAdditionalInfoInputCurrency />
    </>
  );
}

export default InputCurrencyPage;
