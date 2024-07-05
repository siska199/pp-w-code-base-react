
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsTable = () => {
  const listItem = [
    {
      label: "columns",
      content: "Defines the structure of the table columns. Each column object contains properties such as key, name, className, and potentially a custom component for rendering."
    },
    {
      label: "data",
      content: "The data to be displayed in the table. Each data item is an object that may include an `id` and an optional `isChecked` property if `TIncludeChecked` is true."
    },
    {
      label: "setData",
      content: "A function to update the table data state. It is used to update the data when changes occur, such as checking or unchecking items."
    },
    {
      label: "setting",
      content: "An object that contains various settings for the table, such as pagination, sorting, and current page. It helps manage the state of the table."
    },
    {
      label: "onChange",
      content: "A callback function that is called when the table settings change, such as sorting or pagination. It receives the updated settings as a parameter."
    },
    {
      label: "isLoading",
      content: "A boolean indicating whether the table is in a loading state. When true, it can disable interactions like sorting to prevent user actions during data fetching."
    },
    {
      label: "withNo",
      content: "A boolean indicating whether to display row numbers in the table. When true, an additional column with row numbers will be shown."
    }
  ]


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTable;
