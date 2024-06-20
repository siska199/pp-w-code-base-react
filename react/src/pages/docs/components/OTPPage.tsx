import CardAdditionalInfoOTP from "@components/module/input-page/otp/CardAdditionalInfoOTP";
import CardIntroOTP from "@components/module/input-page/otp/CardIntroOTP";
import CardPropsOTP from "@components/module/input-page/otp/CardPropsOTP";
import CardUsageOTP from "@components/module/input-page/otp/CardUsageOTP";

const OTPPage = () => {
  return (
    <>
      <CardIntroOTP />
      <CardPropsOTP />
      <CardUsageOTP />
      <CardAdditionalInfoOTP />
    </>
  );
}

export default OTPPage;
