
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputNPWP = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputNPWP:</p>
      <CodeBlock codeString={generateDisplayComponent('InputNPWP', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-npwp': {
      value: '',
      name : 'input-npwp'
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

  return <InputNPWP
            onChange={handleOnChange}
            {...form['input-npwp']}
          />`;

export default CardUsageInputNPWP;
