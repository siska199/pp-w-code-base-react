
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoBreadcrumb = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The Breadcrumb component defaults to using icon dividers (Chevron Right), with an active item determined by the current URL path or the specified activeItem prop. It renders the items as links using the Button component.
        </p>
      ),
    },
    {
      title: "Dependencies:",
      caption: (
        <p>
          The Breadcrumb component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconChevronRight" to="/docs/prerequisite/helper-component?id=IconChevronRight" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />
          <Filename name="cva" importFrom="class-variance-authority" />,
          <Filename name="VariantProps" importFrom="class-variance-authority" />,
          <Filename name="HTMLProps" importFrom="react" />
          <Filename name="Button" to="/docs/components/button" />


          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
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


export default CardAdditionalInfoBreadcrumb;
