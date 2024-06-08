import CardSubMenu from '@components/cards/CardSubMenu'
import CodeBlock from '@components/ui/CodeBlock'


const CardUsageAccordion = () => {
    return (
        <CardSubMenu title="Usage">
            <p>Example of usage component accordion:</p>
            <CodeBlock codeString={displayUsage} />
        </CardSubMenu>
    )
}

const displayUsage = `const DisplayAccordion = () => {
    const listOption = [
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
      }
    ]
    return <Accordion options={listOption} />
  }`;

export default CardUsageAccordion