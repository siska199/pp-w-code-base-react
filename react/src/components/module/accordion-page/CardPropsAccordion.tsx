import CardSubMenu from "@components/cards/CardSubMenu"
import List from "@components/ui/List"


const CardPropsAccordion = () => {
    const listItem =  [
        {
            label: "items",
            content:"An array of TItemAccordion items that will be displayed in the accordion."
        },
        {
            label :"customeClass (optional)",
            content : " An object for custom CSS classes.",
            childs :[
                {
                    label:"containerItems",
                    content :"Class for the container of all items."
                },
                {
                    label:"container",
                    content:"Class for each individual item`s container."
                },
                {
                    label:"containerLabel",
                    content:"Class for the label section of each item."
                },
                {
                    label:"containerContent",
                    content:"Class for the content section of each item.",
                },
            ]
        }
    ]
    return (
        <CardSubMenu title={'Props'}>
            <List items={listItem}/>
        </CardSubMenu>
    )
}

export default CardPropsAccordion