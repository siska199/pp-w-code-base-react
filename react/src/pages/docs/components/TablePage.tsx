
import CardIntroTable from "@components/module/table-page/CardIntroTable";
import CardPropsTable from "@components/module/table-page/CardPropsTable";
import CardUsageTable from "@components/module/table-page/CardUsageTable";
import CardAdditionalInfoTable from "@components/module/table-page/CardAdditionalInfoTable";

const TablePage = () => {
  return (
    <>
      <CardIntroTable />
      <CardPropsTable />
      <CardUsageTable />
      <CardAdditionalInfoTable />
    </>
  );
}

export default TablePage;
