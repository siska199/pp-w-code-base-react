
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputBase = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputBase:</p>
      <CodeBlock codeString={generateDisplayComponent('InputBase', displayUsage)} />
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

  return <InputBase
            onChange={handleOnChange}
            {...form['input1']}
          />`;

export default CardUsageInputBase;
