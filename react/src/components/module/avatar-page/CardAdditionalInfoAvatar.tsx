
import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoAvatar = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The default variant of the avatar is &apos;soft-gray&apos;, the default size is &apos;base&apos;, and the default shape is &apos;circular&apos;.</p>
    },
    {
      title: "Dynamic Variant",
      caption: <p>If the &apos;type&apos; is &apos;image&apos; and no variant is specified, the variant defaults to &apos;solid-black&apos;.</p>
    },
    {
      title: "Custom Icon",
      caption: <p>You can provide a custom icon using the &apos;customeIcon&apos; prop. This icon will be displayed when the &apos;status&apos; is set to &apos;icon&apos;.</p>
    },
    {
      title: "Status Indicator",
      caption: <p>The component supports various status indicators (offline, online, away, dont-distrub, icon) which are displayed as a small circle on the avatar. These indicators are styled with predefined colors.</p>
    },
    {
      title: "Responsive Design",
      caption: <p>The avatar component is designed to be responsive with appropriate classes for different sizes (&apos;tiny&apos;, &apos;small&apos;, &apos;base&apos;, &apos;large&apos;). Ensure to provide the correct size according to your design requirements.</p>
    },
    {
      title: "Usage of 'name' Prop",
      caption: <p>When the &apos;type&apos; is &apos;initial-name&apos;, the &apos;name&apos; prop is used to display the first letter of the provided name. It is also used for the alt text when the &apos;type&apos; is &apos;image&apos;.</p>
    }
  ];
  

return (
  <CardSubMenu title={'Additional Info'}>
    <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
  </CardSubMenu>
);
}


export default CardAdditionalInfoAvatar;
