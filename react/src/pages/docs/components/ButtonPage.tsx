
import CardButtonUsage from "@components/module/button-page/CardUsageButton";
import CardButtonAdditionalInfo from "@components/module/button-page/CardAdditionalInfoButton";
import CardIntroButton from "@components/module/button-page/CardIntroButton";
import CardPropsButton from "@components/module/button-page/CardPropsButton";

const ButtonPage = () => {
  return (
    <>
      <CardIntroButton />
      <CardPropsButton />
      <CardButtonUsage />
      <CardButtonAdditionalInfo />
    </>
  );
}

export default ButtonPage;
