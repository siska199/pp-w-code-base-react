import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';


const CardUsageAccordion = () => {
    return (
        <CardSubMenu title="Usage">
            <p>Example of usage component accordion:</p>
            <CodeBlock codeString={generateDisplayComponent('Accordion', displayUsage)} />
        </CardSubMenu>
    )
}

const displayUsage = `const listItems = [
        {
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
        },
        {
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
        },
        {
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,'
        }
    ]
    return <Accordion  items={listItems} />`;

export default CardUsageAccordion