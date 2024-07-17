import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputTextArea = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputTextArea:</p>
      <CodeBlock codeString={generateDisplayComponent("InputTextArea", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "const [form, setForm] = useState({\n    'input-text-area': {\n      value: '',\n      name : 'input-text-area'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  return <InputTextArea\n            onChange={handleOnChange}\n            {...form['input-text-area']}\n          />";

export default CardUsageInputTextArea;
