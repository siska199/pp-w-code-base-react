import CardSubMenu from "@components/cards/CardSubMenu"
import CodeBlock from "@components/ui/CodeBlock"
import ProgressStep from "@components/ui/ProgressStep"


const CardAdditionalInfoAccordio = () => {
    const listAdditionalInfo = [
        {
            title: "Code Icon Chevron Toggle",
            caption: <>
                <p >This code creates an animation for a chevron icon that toggles up and down when expanding or collapsing an accordion panel.</p>
                <CodeBlock codeString={displayIconChevronToggle} />
            </>
        },
        {
            title: "Code Icon Chevron SVG",
            caption: <>
                <p >This is the SVG code for the chevron icon used by IconChevronToggle above.</p>
                <CodeBlock codeString={displayIconChevronSVG} />
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


const displayIconChevronSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L11.2929 14.2929C11.6834 14.6834 12.3166 14.6834 12.7071 14.2929L18 9" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
const displayTOption = `export interface TOption {
  label : string;
  value:string;
}`
export default CardAdditionalInfoAccordio