import CardSubMenu from "@components/cards/CardSubMenu"
import List from "@components/ui/List"


const CardPropsAccordion = () => {
    const listItem = [
        {
            label: "items",
            content: "An array of TItemAccordion items that will be displayed in the accordion."
        },
        {
            label: "customeClass (optional)",
            content: " An object for custom CSS classes.",
            childs: [
                {
                    label: 'containerItems',
                    content: 'CSS class applied to the container of all accordion items.'
                },
                {
                    label: 'container',
                    content: 'CSS class applied to each individual accordion item container.'
                },
                {
                    label: 'containerLabel',
                    content: 'CSS class applied to the label section of each accordion item.'
                },
                {
                    label: 'containerContent',
                    content: 'CSS class applied to the caption section of each accordion item, which expands or collapses.'
                },
            ]
        }
    ]
    return (
        <CardSubMenu title={'Props'}>
            <List items={listItem} />
        </CardSubMenu>
    )
}

export default CardPropsAccordion