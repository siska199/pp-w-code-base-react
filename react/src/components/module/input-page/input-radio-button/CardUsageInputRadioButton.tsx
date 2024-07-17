import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputRadioButton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputRadioButton:</p>
      <CodeBlock codeString={generateDisplayComponent("InputRadioButton", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  '\n  const [form, setForm] = useState({\n    \'input-radio\': {\n      value: \'\',\n      name : \'input-radio\'\n    },\n  })\n\n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n    \n  const options = [\n    { label: "Alice Johnson", value: "alice-johnson" },\n    { label: "Bob Smith", value: "bob-smith" },\n    { label: "Charlie Brown", value: "charlie-brown" },\n  ]\n\n  return <InputRadioButton\n          onChange={handleOnChange}\n          {...form[\'input-radio\']}\n          options={options}\n        />\n';

export default CardUsageInputRadioButton;
