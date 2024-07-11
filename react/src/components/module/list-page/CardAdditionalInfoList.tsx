
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoList = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <div>
            By default, the <code>List</code> component renders each item in a vertical layout
            with optional nested lists supported. The default icon rendered next to each list item
            is a small dot icon (🌸), but this can be customized using the <code>defaultIconLi</code> prop.
            The component also supports customizing badge variants based on item nesting levels using
            the <code>variantBadge</code> prop, ensuring visual differentiation for different levels of items.
        </div>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>List</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="variantBadge" to="/docs/prerequisite/variant?id=variant-badge.ts" />,
          <Filename name="Badge" to="/docs/components/badge" />,
          <Filename name="TItemList" to="/docs/prerequisite/types" />, and
          <Filename name="cn" importFrom="cn" />,
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    }
  ];
  
  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoList;
