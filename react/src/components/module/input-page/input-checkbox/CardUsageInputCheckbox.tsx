
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent('InputCheckbox', displayUsage)} />
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
    
  <InputCheckbox
    onChange={handleOnChange}
    {...form['input-checkbox']}
  />
`

  ;

export default CardUsageInputCheckbox;
