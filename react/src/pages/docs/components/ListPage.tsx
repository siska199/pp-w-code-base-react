
import CardIntroList from "@components/module/list-page/CardIntroList";
import CardPropsList from "@components/module/list-page/CardPropsList";
import CardUsageList from "@components/module/list-page/CardUsageList";
import CardAdditionalInfoList from "@components/module/list-page/CardAdditionalInfoList";

const ListPage = () => {
  return (
    <>
      <CardIntroList />
      <CardPropsList />
      <CardUsageList />
      <CardAdditionalInfoList />
    </>
  );
}

export default ListPage;
