
import CardIntroTab from "@components/module/tab-page/CardIntroTab";
import CardPropsTab from "@components/module/tab-page/CardPropsTab";
import CardUsageTab from "@components/module/tab-page/CardUsageTab";
import CardAdditionalInfoTab from "@components/module/tab-page/CardAdditionalInfoTab";

const TabPage = () => {
  return (
    <>
      <CardIntroTab />
      <CardPropsTab />
      <CardUsageTab />
      <CardAdditionalInfoTab />
    </>
  );
}

export default TabPage;
