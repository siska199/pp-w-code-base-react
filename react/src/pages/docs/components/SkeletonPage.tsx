
import CardIntroSkeleton from "@components/module/skeleton-page/CardIntroSkeleton";
import CardPropsSkeleton from "@components/module/skeleton-page/CardPropsSkeleton";
import CardUsageSkeleton from "@components/module/skeleton-page/CardUsageSkeleton";
import CardAdditionalInfoSkeleton from "@components/module/skeleton-page/CardAdditionalInfoSkeleton";

const SkeletonPage = () => {
  return (
    <>
      <CardIntroSkeleton />
      <CardPropsSkeleton />
      <CardUsageSkeleton />
      <CardAdditionalInfoSkeleton />
    </>
  );
}

export default SkeletonPage;
