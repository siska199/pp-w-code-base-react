import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent("InputCheckbox", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "\n  const [form, setForm] = useState({\n  'input1': {\n      value: '',\n      name : 'input1'\n    },\n  })\n\n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n    \n  <InputCheckbox\n    onChange={handleOnChange}\n    {...form['input-checkbox']}\n  />\n";

export default CardUsageInputCheckbox;
