
import CardAdditionalInfoBreadcrumb from "@components/module/breadcrumb-page/CardAdditionalInfoBreadcrumb";
import CardIntroBreadcrumb from "@components/module/breadcrumb-page/CardIntroBreadcrumb";
import CardBreadcrumbProps from "@components/module/breadcrumb-page/CardPropsBreadcrumb";
import CardUsageBreadcrumb from "@components/module/breadcrumb-page/CardUsageBreadcrumb";

const BreadcrumbPage = () => {
  return (
    <>
      <CardIntroBreadcrumb />
      <CardBreadcrumbProps />
      <CardUsageBreadcrumb />
      <CardAdditionalInfoBreadcrumb />
    </>
  );
}

export default BreadcrumbPage;
