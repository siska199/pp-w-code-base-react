
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputPhoneNumber = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPhoneNumber:</p>
      <CodeBlock codeString={generateDisplayComponent('InputPhoneNumber', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-phone-number': {
      value: '',
      name : 'input-phone-number'
    },
  })
  
  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as keyof typeof form
    const value = e.target.value

    setForm({
      ...form,
      [name]: {
        ...form[name],
        value
      }
    })
  }

  return <InputPhoneNumber
            onChange={handleOnChange}
            {...form['input-phone-number']}
          />`;

export default CardUsageInputPhoneNumber;
