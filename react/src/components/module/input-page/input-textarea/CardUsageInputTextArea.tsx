
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputTextArea = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputTextArea:</p>
      <CodeBlock codeString={generateDisplayComponent('InputTextArea', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-text-area': {
      value: '',
      name : 'input-text-area'
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

  return <InputTextArea
            onChange={handleOnChange}
            {...form['input-text-area']}
          />`;

export default CardUsageInputTextArea;
