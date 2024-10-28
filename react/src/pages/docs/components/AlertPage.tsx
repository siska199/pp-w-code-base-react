import CardAdditionalInfoAlert from "@components/module/alert-page/CardAdditionalInfoAlert";
import CardIntroAlert from "@components/module/alert-page/CardIntroAlert";
import CardPropsAlert from "@components/module/alert-page/CardPropsAlert";
import CardUsageAlert from "@components/module/alert-page/CardUsageAlert";


const AlertPage = () => {
  return (
    <>
      <CardIntroAlert />
      <CardPropsAlert />
      <CardUsageAlert />
      <CardAdditionalInfoAlert />
    </>
  );
}

export default AlertPage;
