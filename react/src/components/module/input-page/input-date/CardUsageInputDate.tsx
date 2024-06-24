
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputDate = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputDate:</p>
      <CodeBlock codeString={generateDisplayComponent('InputDate', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-date': {
      value: '',
      name : 'input-date'
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

  return <InputDate
            onChange={handleOnChange}
            {...form['input-date']}
          />`;

export default CardUsageInputDate;
