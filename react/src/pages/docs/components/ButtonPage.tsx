
import CardButtonProps from "@components/module/button-page/CardButtonProps";
import CardButtonUsage from "@components/module/button-page/CardButtonUsage";
import CardButtonAdditionalInfo from "@components/module/button-page/CardButtonAdditionalInfo";
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
