
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoBreadcrumb = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <div >
        <p>The default behavior of the Breadcrumb component includes:</p>
        <List
          items={[
            {
              label: "The items prop ",
              content: "is required and expects an array of objects with &#39;url&#39; and &#39;label&#39; properties."
            },
            {
              label: "If withIconDivider is not specified or set to true",
              content: "a default divider icon (IconChevronRight) is used between breadcrumb items"
            },
            {
              label: " Customization options ",
              content: "include customeIconDivider for replacing the default divider icon and customeClass for applying custom CSS classes, especially for the active breadcrumb item."
            },
            {
              label: "ActiveItem prop",
              content: "can be used to specify the index of the currently active breadcrumb item, which is highlighted based on the current URL or activeItem value."
            }
          ]}
        />
      </div>
    },
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoBreadcrumb;
