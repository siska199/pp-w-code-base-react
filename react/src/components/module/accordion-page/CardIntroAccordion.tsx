import CardIntro from "@components/cards/CardIntro"
import Accordion from "@components/ui/Accordion"

const CardIntroAccordion = () => {

  return (
    <CardIntro
      title={'Accordion'}
      subTitle=" An accordion consists of multiple sections or panels, each containing a header and associated content. The headers are usually displayed in a vertical stack, and clicking on a header expands the associated content while collapsing the others."
      DisplayComponent={<DisplayAccordion />}
      displayCodeBase={displayCodeBase}
    />
  )
}

const DisplayAccordion = () => {
  const listItems = [
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,`
    },
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,`
    },
    {
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,`
    }
  ]
  return <Accordion items={listItems} />
}

const displayCodeBase = `import IconChevronToggle from "@assets/icons/IconChevronToggle";
import { cn } from "@lib/utils/helper";
import { TItemAccordion } from "@types";
import { useState } from "react";

interface TProps {
  items : TItemAccordion[];
  customeClass? :{
    containerItems?   :string;
    container?        :string;
    containerLabel?   : string;
    containerContent? :string;
  }
}

const Accordion = (props: TProps) => {
  const {items,customeClass } = props
  return (
    // Container items
    <div className={cn({
      "flex flex-col gap-2":true,
      [customeClass?.containerItems||""]:customeClass?.containerItems,
    })}>
      {
        items?.map((item, i) => (
          <Floating key={i} {...item} customeClass={customeClass} />
        ))
      }
    </div>
  )
}

type TFloatingProps = TItemAccordion&Pick<TProps,"customeClass">

export const Floating = (props: TFloatingProps ) => {
  const { label, content,customeClass } = props
  
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleAccordion=()=>{
    setIsOpen(!isOpen)
  }

  return (
    // Container
    <div className={cn({
      'flex flex-col gap-2 gap w-full border-b py-3':true,
      [customeClass?.container || '']:customeClass?.container
    })}>
      
      {/* Container Label */}
      <div className={cn({
        'flex items-center w-full font-medium text-body-medium justify-between':true,
        [customeClass?.containerLabel ||'']: customeClass?.containerLabel
      })}>
        {label}
        <div className="cursor-pointer-custome" onClick={() => handleToggleAccordion()}>
          <IconChevronToggle isOpen={isOpen} />
        </div>
      </div>

      {/* Container Content */}
      <div className={cn({
        "transition-all duration-100 ease": true,
        "opacity-100 max-h-[10rem]": isOpen,
        "opacity-0 max-h-0": !isOpen,
        [customeClass?.containerContent||""] : customeClass?.containerContent
      })}>
        <p className="">
          {content}
        </p>
      </div>

    </div>
  )
}

export default Accordion`

export default CardIntroAccordion