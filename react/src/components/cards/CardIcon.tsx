/* eslint-disable @typescript-eslint/ban-ts-comment */
import Card from "@components/ui/Card";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import Tooltip from "@components/ui/Tooltip";
import ContainerModal from "@components/ui/modal/ContainerModal";
import codeStringSVG from "@lib/utils/code-string/svg-icon";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface TProps {
  Icon: React.FC;
  name: string;
}

const CardIcon = (props: TProps) => {
  const { Icon, name } = props
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const [searchParams,] = useSearchParams();

  useEffect(() => {
    const iconName = searchParams?.get('name')
    if (name === iconName) {
      setShowModal(true)
    }
  }, [searchParams, name])

  const handleToggleModal = () => {
    const updateShowModal = !showModal
    navigate(`${location?.pathname}${updateShowModal ? `?name=${name}` : ''}`)
    setShowModal(updateShowModal)
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

      <ContainerModal isShow={showModal} onClose={() => handleToggleModal()} variant={"drawer"} customeClass={{ mdContent: 'p-6' }}>
        <Container variant={"hsc"} gap={"medium"}>
          <Container gap={"base"} variant={"vcc"} fit className="mb-autos">
            <p className="text-body-2xl text-primary-700 rounded-full w-fit px-4 bg-primary-50 font-medium">{name}</p>
            {/* @ts-ignore */}
            <Icon className='w-[10rem] h-[10rem] border bg-gray-100 rounded-lg' />
          </Container>
          <Container variant={"vcc"} className="overflow-x-auto flex-grow">
            <CodeBlock codeString={codeStringSVG[name as keyof typeof codeStringSVG]?.replace('`', '')} />
          </Container>
        </Container>
      </ContainerModal>
    </div>
  )
}






export default CardIcon