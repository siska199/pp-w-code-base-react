
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageDropdown = () => {

  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Dropdown (with Title):</p>
      <CodeBlock codeString={generateDisplayComponent('Dropdown', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const listOptionTitle = [
    {
      title: 'Setting',
      label: <><IconNotification /> Newsletter</>,
      value: "Siska",
    },
    {
      label: <><IconReceipt />Purchase</>,
      value: "Siska"
    },
    {
      label: <><IconDownload /> Download</>,
      value: "Siska",
      className: ""
    },
    {
      label: <><IconUsers />Team Account</>,
      value: "Siska",
      className: "border-b"
    },

    {
      title: "Contact",
      label: <>Contact Support</>,
      value: "Siska",
      className: ""
    }
  ]
  return <DropdownBase
            label={"Action"}
            options={listOptionTitle}
            onClick={handleOnClick}
          />
`;

export default CardUsageDropdown;
