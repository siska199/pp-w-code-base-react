import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoTable = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <div>
          The Table component provides essential functionalities such as handling data updates, sorting by column headers, pagination control, checkbox selection for rows, handling empty data scenarios, customization through types, and responsiveness. Additionally, it supports usage with the &apos;useTable&apos; hook for efficient data management and interaction.
        </div>
      ),
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Table component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconArrowUp" to="/docs/prerequisite/icon?name=IconArrowUp" />,
          <Filename name="IconChevronLeft" to="/docs/prerequisite/icon?name=IconChevronLeft" />,
          <Filename name="IconChevronRight" to="/docs/prerequisite/icon?name=IconChevronRight" />,
          <Filename name="IconSort" to="/docs/prerequisite/icon?name=IconSort" />,
          <Filename name="Button" to="/docs/components/button" />, and
          <Filename name="useTable" to="/docs/prerequisite/helper-component?id=useTable" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Variant",
      caption: (
        <div>
          The Table component supports variant handling through the <span className="italic">modalVariants</span> function from the <span className="italic">class-variance-authority</span> library. This allows applying different animation styles based on the variant prop.
        </div>
      ),
    },
    {
      title: "Usage with useTable Hook",
      caption: (
        <div>
          The useTable hook enhances the functionality of the Table component by centralizing data management and interaction logic. Here’s how it integrates with the Table component:
          <ul className="list-disc pl-6">
            <li><strong>Data Management:</strong> Manages table data, including fetching from APIs and updating states.</li>
            <li><strong>Sorting:</strong> Handles column sorting logic based on user interactions.</li>
            <li><strong>Pagination:</strong> Controls pagination state and allows navigation between pages.</li>
            <li><strong>Checkbox Selection:</strong> Manages row selection using checkboxes with a master selection option.</li>
            <li><strong>Empty Data Handling:</strong> Displays an empty state message when no data is available.</li>
            <li><strong>Customization:</strong> Enables customization of table columns, data rendering, and UI components.</li>
            <li><strong>Responsiveness:</strong> Ensures the table adapts well to different screen sizes and devices.</li>
          </ul>
          To use the Table component effectively, integrate it with the `useTable` hook to streamline data handling and provide a seamless user experience.
        </div>
      ),
    },
  ]

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoTable;
