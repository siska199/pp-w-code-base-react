import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";


const CardAdditionalInfoAccordion = () => {
    const listAdditionalInfo = [
        {
            title: "State Management",
            caption: `Each accordion item in the Accordion component maintains
                    its state using React's useState hook. This ensures that
                    each item can independently expand or collapse its caption section.`
            ,
        },
        {
            title: "Toggle Functionality",
            caption: <p>
                The Floating component within the Accordion
                utilizes a toggle function <span className="italic">handleToggleAccordion</span>  triggered
                by clicking on the toggle icon. This function updates the state to
                expand or collapse the caption based on its current state.
            </p>
            ,
        },
        {
            title: "Dependencies:",
            caption:
                <>
                    <p>
                        The Accordion component relies on several dependencies
                        imported from external sources: <span className="italic">IconChevronToggle</span> for the
                        toggle icon, <span className="italic">cn</span> from <span className="italic">@lib/utils/helper</span> for
                        managing CSS classes, <span className="italic">useState</span> from <span className="italic">react</span> for
                        managing component state, and <span className="italic">TItemAccordion</span> from{" "}
                        <span className="italic">@types</span> for defining the structure of accordion items. Make
                        sure these dependencies are correctly installed and imported for the
                        component to function properly.
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium">IconChevronToggle</p>
                        <CodeBlock codeString={displayIconChevronToggle} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium">TItemAccordion</p>
                        <CodeBlock codeString={displayTOption} />
                    </div>
                </>

            ,
        },
    ];

    return (
        <CardSubMenu title={'Additional Info'}>
            <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
        </CardSubMenu>
    )
}

const displayIconChevronToggle = `import { IconChevronDown } from '@assets/icons';
import { cn } from '@lib/utils/helper';

interface TProps {
    isOpen: boolean;
}

const IconChevronToggle = (props: TProps) => {
    const { isOpen } = props
    return (
        <IconChevronDown className={cn({
            "transition-transform duration-300 cursor-pointer": true,
            "rotate-180": isOpen
        })} />
    )
}

export default IconChevronToggle`


const displayTOption = `export interface TItemAccordion {
    label:string;
    content: string;
  }`
export default CardAdditionalInfoAccordion