import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Here from "@components/ui/text/Here";

const CardAdditionalInfoTable = () => {
  const listAdditionalInfo = [
    {
      title: "Default Column Structure",
      caption: "Each column should have a `key` (unique identifier for the column), `name` (display name), and `className` (CSS classes for styling). Optionally, a column can have a `customeComponent` property for custom rendering.",
    },
    {
      title: "Handling Data Updates",
      caption: "Use the `setData` function to update the table data state. This is useful for handling changes like selecting/deselecting rows or updating data after an API call.",
    },
    {
      title: "Sorting Functionality",
      caption: "The table supports sorting by clicking on column headers. The `onChange` function will be called with updated sorting settings, which should then fetch new sorted data.",
    },
    {
      title: "Pagination Control",
      caption: "The table supports pagination. The `setting` prop should include pagination-related settings such as `currentPage`, `totalPage`, and `itemsPerPage`. The `onChange` function will handle page changes.",
    },
    {
      title: "Loading State",
      caption: "Use the `isLoading` prop to indicate loading state. When `isLoading` is true, interactions like sorting are disabled to prevent user actions during data fetching.",
    },
    {
      title: "Checkbox Selection",
      caption: "If the table includes checkboxes (when `setting.checked` is true), the table will manage the checked state for each row. The `handleOnChangeChecked` function updates the checked state for all or individual rows.",
    },
    {
      title: "Empty Data Handling",
      caption: "When there is no data, the table will display an `EmptyData` component to indicate that there are no records to show.",
    },
    {
      title: "Customization and Extensibility",
      caption: "The table component can be customized further by extending the `TColumn` and `TSettingTable` types and by passing additional props through the `anotherConfigTable` spread.",
    },
    {
      title: "Responsive Design",
      caption: "Ensure the table is responsive by using appropriate CSS classes and container sizes. The table layout adapts to different screen sizes.",
    },
    {
      title: "Component Usage with useTable Hook",
      caption: (
        <p>
          To use this table component with the `useTable` hook, first initialize the hook with necessary parameters such as `initialColumn`, `initialData`, `initialSetting`, and `onFetchData`. The hook will manage table data, settings, and provide necessary handlers for sorting, pagination, and data
          fetching.
          <span>
            You can see the hook file in <Here to="/" />
          </span>
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoTable;
