
import CardBadgeIntro from "@components/module/badge-page/CardBadgeIntro";
import CardBadgeProps from "@components/module/badge-page/CardBadgeProps";
import CardBadgeUsage from "@components/module/badge-page/CardBadgeUsage";
import CardBadgeAdditionalInfo from "@components/module/badge-page/CardBadgeAdditionalInfo";

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
