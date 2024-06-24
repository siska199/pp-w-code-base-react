
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageOTP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of OTP:</p>
      <CodeBlock codeString={generateDisplayComponent('OTP', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const [form, setForm] = useState({
    'input-otp': {
      label: 'Input OTP',
      value: false,
      name: 'input-otp',
    },
  })

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as keyof typeof form
    const value = e.target.value

    if(name==='input-otp' && value){
      // DO SOMETHING WHILE OTP CORRECT
    }
    setForm({
      ...form,
      [name]: {
        ...form[name],
        value
      }
    })
  }
  return <>
          <InputOTP
            onChange={handleOnChange}
            {...form['input-otp']}
            numberOfDigits={4}
            correctOTP="1234"
            errorMessage="OTP Is Incorrect"
          />
  </>
`;

export default CardUsageOTP;
