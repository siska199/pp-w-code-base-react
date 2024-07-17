import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputPercentage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPercentage:</p>
      <CodeBlock codeString={generateDisplayComponent("InputPercentage", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "const [form, setForm] = useState({\n    'input-percentage': {\n      value: '',\n      name : 'input-percentage'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  return <InputPercentage\n            onChange={handleOnChange}\n            {...form['input-percentage']}\n          />";

export default CardUsageInputPercentage;
