import IconChevronToggle from "@assets/icons/IconChevronToggle";
import { cn } from "@lib/utils/helper";
import { TItemAccordion } from "@types";
import { useState } from "react";

interface TProps {
  items: TItemAccordion[];
  customeClass?: {
    containerItems?: string;
    container?: string;
    containerLabel?: string;
    containerContent?: string;
  }
}

const Accordion = (props: TProps) => {
  const { items, customeClass } = props
  return (
    <div className={cn({
      "flex flex-col gap-2": true,
      [customeClass?.container || ""]: customeClass?.container,
    })}>
      {
        items?.map((item, i) => (
          <Floating key={i} {...item} customeClass={customeClass} />
        ))
      }
    </div>
  )
}

type TFloatingProps = TItemAccordion & Pick<TProps, "customeClass">

export const Floating = (props: TFloatingProps) => {
  const { label, content, customeClass } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    // Container
    <div className={cn({
      'flex flex-col gap-2 gap w-full border-b py-2': true,
      [customeClass?.containerItems || '']: customeClass?.containerItems
    })}>

      {/* Container Label */}
      <div className={cn({
        'flex items-center w-full font-medium  justify-between': true,
        [customeClass?.containerLabel || '']: customeClass?.containerLabel
      })}>
        {label}
        <div className="cursor-pointer-custome" onClick={() => handleToggleAccordion()}>
          <div className="box-shadow-1 rounded-full">
            <IconChevronToggle isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* Container Content */}
      <div className={cn({
        "transition-all duration-100 ease": true,
        "opacity-100 max-h-[10rem]": isOpen,
        "opacity-0 max-h-0": !isOpen,
        [customeClass?.containerContent || ""]: customeClass?.containerContent
      })}>
        <p className="">
          {content}
        </p>
      </div>

    </div>
  )
}

export default Accordion

