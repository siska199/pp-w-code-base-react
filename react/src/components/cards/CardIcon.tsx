import Card from "@components/ui/Card"
import Tooltip from "@components/ui/Tooltip"
import React from "react"

interface TProps {
  Icon: React.FC;
  name: string;
}

const CardIcon = (props: TProps) => {
  const { Icon, name } = props
  return (
    <Tooltip text={name} variant="bottom">
      <Card
        className="bg-gray-50 cursor-pointer-custome"
        body={{
          content: <Icon />
        }}
      />
    </Tooltip>
  )
}

export default CardIcon