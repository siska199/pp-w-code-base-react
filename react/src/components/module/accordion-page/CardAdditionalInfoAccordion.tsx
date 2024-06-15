import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";


const CardAdditionalInfoAccordion = () => {
    const listAdditionalInfo = [
        {
            title: "Custom Classes:",
            caption:
                <>
                    <p>
                        The <code>Accordion</code> component allows customization through the{" "}
                        <code>customeClass</code> prop, which accepts an object with optional
                        CSS class names for different parts of the accordion:
                    </p>
                    <ul>
                        <li>
                            <strong>containerItems:</strong> CSS class applied to the container
                            of all accordion items.
                        </li>
                        <li>
                            <strong>container:</strong> CSS class applied to each individual
                            accordion item container.
                        </li>
                        <li>
                            <strong>containerLabel:</strong> CSS class applied to the label
                            section of each accordion item.
                        </li>
                        <li>
                            <strong>containerContent:</strong> CSS class applied to thecaption
                            section of each accordion item, which expands or collapses.
                        </li>
                    </ul>
                    <p>
                        These classes allow users to style the accordion according to their
                        specific design requirements.
                    </p>
                </>
            ,
        },
        {
            title: "State Management:",
            caption:
                <p>
                    Each accordion item in the <code>Accordion</code> component maintains
                    its state using React&apos;s <code>useState</code> hook. This ensures that
                    each item can independently expand or collapse itscaption section.
                </p>
            ,
        },
        {
            title: "Toggle Functionality:",
            caption:
                <p>
                    The <code>Floating</code> component within the <code>Accordion</code>{" "}
                    utilizes a toggle function <code>handleToggleAccordion</code> triggered
                    by clicking on the toggle icon. This function updates the state to
                    expand or collapse thecaption based on its current state.
                </p>
            ,
        },
        {
            title: "Dependencies:",
            caption:
                <>
                    <p>
                        The <code>Accordion</code> component relies on several dependencies
                        imported from external sources: <code>IconChevronToggle</code> for the
                        toggle icon, <code>cn</code> from <code>@lib/utils/helper</code> for
                        managing CSS classes, <code>useState</code> from <code>react</code> for
                        managing component state, and <code>TItemAccordion</code> from{" "}
                        <code>@types</code> for defining the structure of accordion items. Make
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