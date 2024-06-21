/* eslint-disable @typescript-eslint/ban-ts-comment */
import Card from "@components/ui/Card";
import CodeBlock from "@components/ui/CodeBlock";
import Tooltip from "@components/ui/Tooltip";
import ContainerModal from "@components/ui/modal/ContainerModal";
import React, { useState } from "react";

interface TProps {
  Icon: React.FC;
  name: string;
}

const CardIcon = (props: TProps) => {
  const { Icon, name } = props
  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }


  return (
    <div>
      <Tooltip text={name} variant="bottom">
        <Card
          className="bg-gray-50 cursor-pointer-custome"
          body={{
            content: <Icon />
          }}
          onClick={() => handleToggleModal()}
        />
      </Tooltip>

      <ContainerModal isShow={showModal} onClose={() => handleToggleModal()} variant={"effect-3"}>
        <div className="flex gap-8">
          <div>
            {/* @ts-ignore */}
            <Icon className='w-[10rem] h-[10rem] border bg-gray-100 rounded-lg' />
          </div>
          <div className="flex flex-col gap-4 overflow-x-auto">
            <h5 className="text-primary-700 rounded-full w-fit px-4 bg-primary-50 font-medium">{name}</h5>
            <CodeBlock codeString={svgCode[name as keyof typeof svgCode]} />
          </div>
        </div>
      </ContainerModal>
    </div>
  )
}


const svgCode = {
  IconCalender: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2.33333" width="12" height="12" rx="3.33333" stroke="#0F172A" stroke-width="1"/>
  <path d="M2 5.66667H14" stroke="#0F172A" stroke-width="1" stroke-linejoin="round"/>
  <path d="M11 1.33333L11 3.33333" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 1.33333L5 3.33333" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.33333 8.33333H5" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.66667 8.33333H8.33333" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 8.33333H11.6667" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.33333 11H5" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.66667 11H8.33333" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 11H11.6667" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  IconChevronDown: `<svg name='arrow-down' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.33333 10.6667L7.52859 12.8619C7.78899 13.1223 8.2111 13.1223 8.47151 12.8619L10.6667 10.6667M8 12.6667L8 3.33333" stroke="#0F172A" stroke-width="1" stroke-linecap="round"/>
</svg>`,
IconChevronLeft:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 3.33333L6.44626 7.47941C6.18947 7.779 6.18947 8.221 6.44626 8.52059L10 12.6667" stroke="#0F172A" stroke-width="1" stroke-linecap="round"/>
</svg>
`,
IconChevronRight:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 12L9.4343 8.56568C9.74674 8.25324 9.74674 7.74676 9.4343 7.43432L6 4" stroke="#0F172A" stroke-width="1" stroke-linecap="round"/>
</svg>`
}



export default CardIcon