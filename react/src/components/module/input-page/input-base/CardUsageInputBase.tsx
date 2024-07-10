import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputBase = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputBase:</p>
      <CodeBlock codeString={generateDisplayComponent("InputBase", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "\n  const [form, setForm] = useState({\n    'input1': {\n      value: '',\n      name : 'input1'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  return <InputBase\n            onChange={handleOnChange}\n            {...form['input1']}\n          />";

export default CardUsageInputBase;
