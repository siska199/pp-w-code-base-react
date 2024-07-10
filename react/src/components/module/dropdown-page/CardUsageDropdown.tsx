import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageDropdown = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Dropdown (with Title):</p>
      <CodeBlock codeString={generateDisplayComponent("Dropdown", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  '\n  const listOptionTitle = [\n    {\n      title: \'Setting\',\n      label: <><IconNotification /> Newsletter</>,\n      value: "Siska",\n    },\n    {\n      label: <><IconReceipt />Purchase</>,\n      value: "Siska"\n    },\n    {\n      label: <><IconDownload /> Download</>,\n      value: "Siska",\n      className: ""\n    },\n    {\n      label: <><IconUsers />Team Account</>,\n      value: "Siska",\n      className: "border-b"\n    },\n\n    {\n      title: "Contact",\n      label: <>Contact Support</>,\n      value: "Siska",\n      className: ""\n    }\n  ]\n  return <DropdownBase\n            label={"Action"}\n            options={listOptionTitle}\n            onClick={handleOnClick}\n          />\n';

export default CardUsageDropdown;
