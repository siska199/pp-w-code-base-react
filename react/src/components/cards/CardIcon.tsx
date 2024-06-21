import Card from "@components/ui/Card"
import React from "react"

interface TProps {
  Icon: React.FC
}

const CardIcon = (props: TProps) => {
  const { Icon } = props
  return (
    <Card
      className="bg-gray-50 cursor-pointer-custome"
      body={{
        content: <Icon/>
      }}
    />
  )
}

export default CardIcon