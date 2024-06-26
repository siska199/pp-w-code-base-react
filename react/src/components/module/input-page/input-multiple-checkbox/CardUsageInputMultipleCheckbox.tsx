
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputMultipleCheckbox = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputMultipleCheckbox:</p>
      <CodeBlock codeString={generateDisplayComponent('InputMultipleCheckbox', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `
  const [form, setForm] = useState({
  'input-multi-checkbox': {
      value: '',
      name : 'input-multi-checkbox'
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

  return <InputMultipleCheckbox
          onChange={handleOnChange}
          {...form['input-multi-checkbox']}
          options={options}
        />
`;

export default CardUsageInputMultipleCheckbox;
