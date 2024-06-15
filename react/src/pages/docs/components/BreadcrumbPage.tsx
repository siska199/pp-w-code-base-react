
import CardBreadcrumbProps from "@components/module/breadcrumb-page/CardPropsBreadcrumb";
import CardBreadcrumbUsage from "@components/module/breadcrumb-page/CardBreadcrumbUsage";
import CardBreadcrumbAdditionalInfo from "@components/module/breadcrumb-page/CardAdditionalInfoBreadcrumb";
import CardBreadcrumbIntro from "@components/module/breadcrumb-page/CardBreadcrumbIntroComponent";

const BreadcrumbPage = () => {
  return (
    <>
      <CardBreadcrumbIntro />
      <CardBreadcrumbProps />
      <CardBreadcrumbUsage />
      <CardBreadcrumbAdditionalInfo />
    </>
  );
}

export default BreadcrumbPage;
