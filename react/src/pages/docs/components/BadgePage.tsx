
import CardBadgeIntro from "@components/module/badge-page/CardIntroBadge";
import CardBadgeProps from "@components/module/badge-page/CardPropsBadge";
import CardBadgeUsage from "@components/module/badge-page/CardUsageBadge";
import CardBadgeAdditionalInfo from "@components/module/badge-page/CardAdditionalInfoBadge";

const BadgePage = () => {
  return (
    <>
      <CardBadgeIntro />
      <CardBadgeProps />
      <CardBadgeUsage />
      <CardBadgeAdditionalInfo />
    </>
  );
}

export default BadgePage;
