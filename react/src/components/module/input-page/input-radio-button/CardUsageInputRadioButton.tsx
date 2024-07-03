
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputRadioButton = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputRadioButton:</p>
      <CodeBlock codeString={generateDisplayComponent('InputRadioButton', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const [form, setForm] = useState({
    'input-radio': {
      value: '',
      name : 'input-radio'
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
    
  const options = [
    { label: "Alice Johnson", value: "alice-johnson" },
    { label: "Bob Smith", value: "bob-smith" },
    { label: "Charlie Brown", value: "charlie-brown" },
  ]

  return <InputRadioButton
          onChange={handleOnChange}
          {...form['input-radio']}
          options={options}
        />
`;

export default CardUsageInputRadioButton;
