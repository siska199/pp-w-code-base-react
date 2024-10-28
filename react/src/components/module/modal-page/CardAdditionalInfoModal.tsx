import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoModal = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The <code>ContainerModal</code> component initializes with a default behavior where it is initially hidden (&apos;isShow=false&apos;). To display the modal, set the &apos;isShow&apos; prop to &apos;true&apos;.
        </p>
      )
    },
    {
      title: "Variants",
      caption: (
        <p>
          The <code>ContainerModal</code> component supports different visual variants or animation styles using the &apos;variant&apos; prop. Variants include &apos;fadein-scaleup&apos;, &apos;slide-formright&apos;, and &apos;drawer&apos;,
          each providing distinct presentation styles for the modal component.
        </p>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The <code>ContainerModal</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconClose" to="/docs/prerequisite/icon?name=IconClose" />,
          <Filename name={'@assets/styles/ui/modal.css'} to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="Button" to="/docs/components/button" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="TBaseModal" to="/docs/prerequisite/types" />,
          <Filename name="VariantProps" importFrom="class-variance-authority" />,
          <Filename name="cva" importFrom="class-variance-authority" />, and
          <Filename name="clsx" importFrom="clsx" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoModal;
