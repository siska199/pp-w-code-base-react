
import CardAlertIntro from "@components/module/alert-page/CardAlertIntro";
import CardAlertProps from "@components/module/alert-page/CardAlertProps";
import CardAlertUsage from "@components/module/alert-page/CardAlertUsage";
import CardAlertAdditionalInfo from "@components/module/alert-page/CardAlertAdditionalInfo";

const AlertPage = () => {
  return (
    <>
      <CardAlertIntro />
      <CardAlertProps />
      <CardAlertUsage />
      <CardAlertAdditionalInfo />
    </>
  );
}

export default AlertPage;
