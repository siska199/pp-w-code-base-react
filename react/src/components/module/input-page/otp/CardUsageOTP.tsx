import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageOTP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of OTP:</p>
      <CodeBlock codeString={generateDisplayComponent("OTP", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  "\n  const [form, setForm] = useState({\n    'input-otp': {\n      label: 'Input OTP',\n      value: false,\n      name: 'input-otp',\n    },\n  })\n\n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as keyof typeof form\n    const value = e.target.value\n\n    if(name==='input-otp' && value){\n      // DO SOMETHING WHILE OTP CORRECT\n    }\n    setForm({\n      ...form,\n      [name]: {\n        ...form[name],\n        value\n      }\n    })\n  }\n  return <>\n          <InputOTP\n            onChange={handleOnChange}\n            {...form['input-otp']}\n            numberOfDigits={4}\n            correctOTP=\"1234\"\n            message={{error:'OTP Is Incorrect', success:'OTP Is Correct'}}\n          />\n  </>\n";

export default CardUsageOTP;
