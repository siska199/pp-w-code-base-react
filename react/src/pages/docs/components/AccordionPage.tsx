import HeaderIntro from "@components/headers/HeaderIntro";
import HeaderSubMenu from "@components/headers/HeaderSubMenu";
import Accordion from "@components/ui/Accordion";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";
import Tabs from "@components/ui/Tabs";



const AccordionPage = () => {
  const listTab = [
    {
      id: "0",
      label: 'Preview'
    },
    {
      id: "2",
      label: 'Code Base'
    },
  ]

  const listAdditionalInfo = [
    {
      title: "Code Icon Chevron Toggle",
      caption: <CodeBlock codeString={displayIconChevronToggle} />
    },
    {
      title: "Code Icon Chevron SVG",
      caption: <CodeBlock codeString={displayIconChevronSVG} />
    },

  ]
  return (
    <>
      <HeaderIntro
        title={'Accordion'}
        subTitle=" An accordion consists of multiple sections or panels, each containing a header and associated content. The headers are usually displayed in a vertical stack, and clicking on a header expands the associated content while collapsing the others."
      />
      <div>
        <Tabs listTab={listTab} >
          {
            ({ activeTab }) => <>
              {activeTab === 0 && <DisplayAccordion />}
              {activeTab == 1 && < CodeBlock codeString={displayCodeBase} />}
            </>
          }
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <HeaderSubMenu title={'Usage'} />
        <p className="text-gray block">Example of usage component accordion:</p>
        <CodeBlock codeString={displayUsage} />
      </div>

      <div className="flex flex-col gap-4">
        <HeaderSubMenu title={'Additional Info'} />
        <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
      </div>
    </>
  )
}


const DisplayAccordion = () => {
  const listOption = [
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio,`
    },
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio,`
    },
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio,`
    }
  ]
  return <Accordion options={listOption} />
}

const displayCodeBase = `/* eslint-disable react/jsx-handler-names */
import IconChevronToggle from "@assets/icons/IconChevronToggle"
import { TOption } from "@types"
import clsx from "clsx"
import { useState } from "react"

interface TProps {
  options: TOption[]
}

const Accordion = (props: TProps) => {
  const { options } = props
  return (
    <div className="flex flex-col gap-2">
      {
        options?.map((option, i) => (
          <Floating key={i} {...option} />
        ))
      }
    </div>
  )
}


const Floating = (props: TOption) => {
  const { label, value } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-2 gap w-full border-b py-3">
      <div className="flex items-center w-full font-medium text-body-large justify-between">
        {label}
        <div className="cursor-pointer-custome" onClick={() => setIsOpen(!isOpen)}>
          <IconChevronToggle isOpen={isOpen} />
        </div>
      </div>
      <div className={clsx({
        "transition-all  duration-100 ease  text-body-medium text-gray": true,
        " opacity-100 max-h-[10rem]": isOpen,
        " opacity-0 max-h-0": !isOpen
      })}>
        {value}
      </div>
    </div>
  )
}

export default Accordion
`;
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
export default AccordionPage