
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputPercentage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputPercentage:</p>
      <CodeBlock codeString={generateDisplayComponent('InputPercentage', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-percentage': {
      value: '',
      name : 'input-percentage'
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

  return <InputPercentage
            onChange={handleOnChange}
            {...form['input-percentage']}
          />`;

export default CardUsageInputPercentage;
