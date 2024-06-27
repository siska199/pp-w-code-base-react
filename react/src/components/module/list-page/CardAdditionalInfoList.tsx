
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoList = () => {
  const listAdditionalInfo = [
    {
      title: "Handling Nested Lists",
      caption: (
        <p>
          The <code>List</code> component supports nested lists through recursive rendering.
          This means you can include lists within lists by defining the <code>childs</code> property
          in your item objects. The component will handle rendering these nested structures
          efficiently.
        </p>
      )
    },
    {
      title: "Custom Styling with customeClass",
      caption: (
        <p>
          Use the <code>customeClass</code> prop to apply custom CSS classes to the rendered
          <code>&lt;ul&gt;</code> (unordered list) and <code>&lt;li&gt;</code> (list item) elements.
          This allows you to easily adjust the appearance of the list to match your design
          requirements. Pass an object with <code>ul</code> and/or <code>li</code> properties, each
          containing CSS class names.
        </p>
      )
    },
    {
      title: "Using Title for List Organization",
      caption: (
        <p>
          If you provide a <code>title</code> prop, it will be displayed prominently at the top of
          the list using a <code>Badge</code> component. This helps in organizing and identifying
          the purpose of the list within your application&apos;s interface.
        </p>
      )
    }
  ];
  

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoList;
