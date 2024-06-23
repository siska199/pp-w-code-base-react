
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputBase = () => {
  const listAdditionalInfo = [
    {
      title: "Customizable Attributes",
      caption: (
        <p>
          The <code>InputBase</code> component inherits properties from both <code>TBasePropsInput</code> and <code>React.HTMLProps&lt;HTMLInputElement&gt;</code>, allowing customization of attributes such as <code>className</code>, <code>style</code>, and others directly applied to the underlying <code>&lt;input /&gt;</code> element.
        </p>
      )
    },
    {
      title: "Event Handling",
      caption: (
        <p>
          Use the <code>onChange</code> prop to handle input changes. This function receives the <code>ChangeEvent</code> object from React, giving you access to the updated value via <code>e.target.value</code>.
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


export default CardAdditionalInfoInputBase;
