import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";


const CardAdditionalInfoAccordion = () => {
    const listAdditionalInfo = [
        {
            title: "Default Behavior",
            caption: <p>The default behavior of the Accordion component allows each item to be collapsed or expanded independently. It uses the useState hook to manage the open/close state of each accordion item.</p>
        },
        {
            title: "Dependencies:",
            caption:
                <p>
                    The Accordion component relies on several dependencies
                    imported from external sources: <Filename name="IconChevronToggle" to="/docs/prerequisite/helper-component?id=IconChevronToggle.tsx" /> for the
                    toggle icon, <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" /> for managing CSS classes,
                    <Filename name="useState" /> for managing component state, and <Filename name="TItemAccordion" /> for defining the structure of accordion items. Make
                    sure these dependencies are correctly installed and imported for the
                    component to function properly.
                </p>

            ,
        },
        {
            title: "Toggle Functionality",
            caption: <p>
                The Floating component within the Accordion
                utilizes a toggle function <Filename name="handleToggleAccordion" /> triggered
                by clicking on the toggle icon. This function updates the state to
                expand or collapse the caption based on its current state.
            </p>
            ,
        },

    ];

    return (
        <CardSubMenu title={'Additional Info'}>
            <ProgressStep
                type="number"
                listStep={listAdditionalInfo}
                variant="vertical"
            />
        </CardSubMenu>
    )
}


export default CardAdditionalInfoAccordion