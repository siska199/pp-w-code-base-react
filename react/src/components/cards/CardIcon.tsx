/* eslint-disable @typescript-eslint/ban-ts-comment */
import svgCode from "@assets/icons/svg-code";
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
        <div className="flex gap-8 items-center">
          <div>
            {/* @ts-ignore */}
            <Icon className='w-[10rem] h-[10rem] border bg-gray-100 rounded-lg' />
          </div>
          <div className="flex flex-col gap-4 overflow-x-auto">
            <h5 className="text-primary-700 rounded-full w-fit px-4 bg-primary-50 font-medium">{name}</h5>
            <CodeBlock codeString={svgCode[name as keyof typeof svgCode]?.replace('`','')} />
          </div>
        </div>
      </ContainerModal>
    </div>
  )
}






export default CardIcon