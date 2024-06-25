
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputSelect = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          By default, the InputSelect component renders as a single-select dropdown with options provided in the &apos;options&apos; prop. It automatically selects the corresponding label when &apos;value&apos; prop changes.
        </p>
      ),
    },
    {
      title: "Search Functionality",
      caption: (
        <p>
          InputSelect supports real-time search functionality. As you type in the input field, it filters the options based on the search query, updating the dropdown list dynamically.
        </p>
      ),
    },
    {
      title: "Dropdown Behavior",
      caption: (
        <p>
          The dropdown opens and closes based on user interaction with the input field and the dropdown arrow. Clicking outside the dropdown area closes it, ensuring intuitive user experience.
        </p>
      ),
    },
    {
      title: "Accessibility Features",
      caption: (
        <p>
          InputSelect component includes accessibility features such as ARIA attributes and keyboard navigation support. This ensures it is usable by all users, including those relying on screen readers and keyboard navigation.
        </p>
      ),
    },
    {
      title: "Performance Considerations",
      caption: (
        <p>
          To enhance performance, InputSelect employs debounce techniques for search queries and lazy-loading options when scrolling through large datasets. This minimizes unnecessary renders and improves user experience.
        </p>
      ),
    },
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoInputSelect;
