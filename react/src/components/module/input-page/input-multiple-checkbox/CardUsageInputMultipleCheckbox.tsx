import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputMultipleCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputMultipleCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent("InputMultipleCheckbox", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  '\n  const [form, setForm] = useState({\n  \'input-multi-checkbox\': {\n      value: \'\',\n      name : \'input-multi-checkbox\'\n    },\n  })\n\n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  const options = [\n      { label: "Alice Johnson", value: "alice-johnson" },\n      { label: "Bob Smith", value: "bob-smith" },\n      { label: "Charlie Brown", value: "charlie-brown" },\n    ]\n\n  return <InputMultipleCheckbox\n          onChange={handleOnChange}\n          {...form[\'input-multi-checkbox\']}\n          options={options}\n        />\n';

export default CardUsageInputMultipleCheckbox;
