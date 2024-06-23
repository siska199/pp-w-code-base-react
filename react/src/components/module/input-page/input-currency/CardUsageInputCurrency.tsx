
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputCurrency = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputCurrency:</p>
      <CodeBlock codeString={generateDisplayComponent('InputCurrency', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const [form, setForm] = useState({
    'input1': {
      value: '',
      name : 'input1'
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

  return <InputCurrency
            onChange={handleOnChange}
            {...form['input1']}
          />`;

export default CardUsageInputCurrency;
