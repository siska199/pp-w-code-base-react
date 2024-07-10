import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputNPWP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputNPWP:</p>
      <CodeBlock codeString={generateDisplayComponent("InputNPWP", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "const [form, setForm] = useState({\n    'input-npwp': {\n      value: '',\n      name : 'input-npwp'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  return <InputNPWP\n            onChange={handleOnChange}\n            {...form['input-npwp']}\n          />";

export default CardUsageInputNPWP;
