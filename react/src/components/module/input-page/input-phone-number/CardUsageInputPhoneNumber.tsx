import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputPhoneNumber = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPhoneNumber:</p>
      <CodeBlock codeString={generateDisplayComponent("InputPhoneNumber", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "const [form, setForm] = useState({\n    'input-phone-number': {\n      value: '',\n      name : 'input-phone-number'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n\n  return <InputPhoneNumber\n            onChange={handleOnChange}\n            {...form['input-phone-number']}\n          />";

export default CardUsageInputPhoneNumber;
