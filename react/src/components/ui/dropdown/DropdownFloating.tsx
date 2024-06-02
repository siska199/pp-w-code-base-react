/* eslint-disable react/jsx-handler-names */
import { IconMinus, IconPlus } from "@assets/icons"
import { TOption } from "@types"
import clsx from "clsx"
import { useState } from "react"

interface TProps {
  options: TOption[]
}

const DropdownFloating = (props: TProps) => {
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
          {isOpen ? <IconMinus /> : <IconPlus />}
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

export default DropdownFloating