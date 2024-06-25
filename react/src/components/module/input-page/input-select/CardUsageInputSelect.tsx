
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageInputSelect = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputSelect:</p>
      <CodeBlock codeString={generateDisplayComponent('InputSelect', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `const [form, setForm] = useState({
    'input-select': {
      value: '',
      name : 'input-select'
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
  const listOption = [
      {
        label: 'SISKA 1',
        value: 'SISKA 1'
      },
      {
        label: 'SISKA 2',
        value: 'SISKA 2'
      },
      {
        label: 'SISKA 3',
        value: 'SISKA 3'
      },
      {
        label: 'SISKA 4',
        value: 'SISKA 4'
      },
      {
        label: 'SISKA 5',
        value: 'SISKA 5'
      },
      {
        label: 'SISKA 6',
        value: 'SISKA 6'
      },
      {
        label: 'SISKA 7',
        value: 'SISKA 7'
      }
    ]
  return <InputSelect
          onChange={handleOnChange}
          {...form['input-select']}
          options={listOption}
        />}
`;

export default CardUsageInputSelect;
