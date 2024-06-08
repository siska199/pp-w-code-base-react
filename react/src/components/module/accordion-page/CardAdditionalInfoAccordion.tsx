import CardSubMenu from "@components/cards/CardSubMenu"
import CodeBlock from "@components/ui/CodeBlock"
import ProgressStep from "@components/ui/ProgressStep"


const CardAdditionalInfoAccordion = () => {
    const listAdditionalInfo = [
        {
            title: "Code Icon Chevron Toggle",
            caption: <>
                <p >This code creates an animation for a chevron icon that toggles up and down when expanding or collapsing an accordion panel.</p>
                <CodeBlock codeString={displayIconChevronToggle} />
            </>
        },
        {
            title: "TOptions",
            caption: <>
                <p>This is the type definition for the option used by the Accordion component.</p>
                <CodeBlock codeString={displayTOption} />
            </>
        },

    ]
    return (
        <CardSubMenu title={'Additional Info'}>
            <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
        </CardSubMenu>
    )
}

const displayIconChevronToggle = `import { IconChevronDown } from '@assets/icons';
import clsx from 'clsx';

interface TProps {
    isOpen: boolean;
}

const IconChevronToggle = (props: TProps) => {
    const { isOpen } = props
    return (
        <IconChevronDown className={clsx({
            "transition-transform duration-300 cursor-pointer": true,
            "rotate-180": isOpen
        })} />
    )
}

export default IconChevronToggle`

const displayTOption = `export interface TOption {
  label : string;
  value:string;
}`
export default CardAdditionalInfoAccordion