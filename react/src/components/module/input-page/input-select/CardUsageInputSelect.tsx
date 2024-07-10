import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputSelect = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputSelect:</p>
      <CodeBlock codeString={generateDisplayComponent("InputSelect", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "const [form, setForm] = useState({\n    'input-select': {\n      value: '',\n      name : 'input-select'\n    },\n  })\n  \n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n  const listOption = [\n      {\n        label: 'SISKA 1',\n        value: 'SISKA 1'\n      },\n      {\n        label: 'SISKA 2',\n        value: 'SISKA 2'\n      },\n      {\n        label: 'SISKA 3',\n        value: 'SISKA 3'\n      },\n      {\n        label: 'SISKA 4',\n        value: 'SISKA 4'\n      },\n      {\n        label: 'SISKA 5',\n        value: 'SISKA 5'\n      },\n      {\n        label: 'SISKA 6',\n        value: 'SISKA 6'\n      },\n      {\n        label: 'SISKA 7',\n        value: 'SISKA 7'\n      }\n    ]\n  return <InputSelect\n          onChange={handleOnChange}\n          {...form['input-select']}\n          options={listOption}\n        />}\n";

export default CardUsageInputSelect;
