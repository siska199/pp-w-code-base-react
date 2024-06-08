import CopyText from '@components/ui/CopyText';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `

/* eslint-disable react/jsx-handler-names */
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
// Custom style object based on solarizedlight
const customStyle = {
    ...solarizedlight,
    'pre[class*="language-"]': {
        ...solarizedlight['pre[class*="language-"]'],
        background: '#FDF2F8', // Change this to your desired background color
        position: 'relative',

    },
    'code[class*="language-"]': {
        ...solarizedlight['code[class*="language-"]'],
        background: '#FDF2F8', // Ensure code elements have the same background color
        fontFamily: '"Poppins", "Consolas", "Courier New", monospace', // Change this to your desired font family
        position: 'relative',

    },

};
const CodeBlock = () => {
    return (
        <div className='relative  w-full'>
            <CopyText text={codeString} classText='hidden' classContainer={'absolute w-fit right-2 top-4 z-[5]'} />
            <SyntaxHighlighter language="javascript" style={customStyle}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
