
import CardButtonProps from "@components/module/button-page/CardButtonProps";
import CardButtonUsage from "@components/module/button-page/CardUsageButton";
import CardButtonAdditionalInfo from "@components/module/button-page/CardAdditionalInfoButton";
import CardButtonIntro from "@components/module/button-page/CardButtonIntro";

const ButtonPage = () => {
  return (
    <>
      <CardButtonIntro />
      <CardButtonProps />
      <CardButtonUsage />
      <CardButtonAdditionalInfo />
    </>
  );
}

export default ButtonPage;
