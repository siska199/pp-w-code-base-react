import CardAdditionalInfoAvatar from "@components/module/avatar-page/CardAdditionalInfoAvatar";
import CardIntroAvatar from "@components/module/avatar-page/CardIntroAvatar";
import CardPropsAvatar from "@components/module/avatar-page/CardPropsAvatar";
import CardUsageAvatar from "@components/module/avatar-page/CardUsageAvatar";



const AvatarPage = () => {
  return (
    <>
      <CardIntroAvatar />
      <CardPropsAvatar />
      <CardUsageAvatar />
      <CardAdditionalInfoAvatar />
    </>
  );
}

export default AvatarPage;
