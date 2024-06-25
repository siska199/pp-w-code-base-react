/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconCheck } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { arraysHaveSameMembers, cn } from '@lib/utils/helper';
import { TCustomeEventOnChange } from "@types";
import { useEffect, useState } from 'react';

interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  name: string;
  onChange: (e: TCustomeEventOnChange<string[]>) => void;
  options: {
    label: string;
    value: any;
  }[];
  value: (any)[];
  customeClassMulCheckbox?: {
    containerOption?: string;
    containerCheckbox?: string;
  }
  withSelectAll?: boolean;
  activeIndex?: number
}

const InputMultipleCheckbox = (props: TProps) => {
  const { name, onChange, options, value, customeClassMulCheckbox, withSelectAll, ...attrsInput } = props
  const [isCheckAll, setIsCheckAll] = useState(false)

  useEffect(() => {
    if (withSelectAll) {
      setIsCheckAll(arraysHaveSameMembers(value, options?.map((data) => data.value)))
    }
  }, [value])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const valueInput = e.target?.value

    let updateValue = isChecked ? [...value, valueInput] : value?.filter(data => data !== valueInput)
    if (valueInput === 'all') {
      updateValue = isChecked ? options?.map((data) => data?.value) : []
    }

    onChange({
      target: {
        name,
        value: updateValue
      }
    })
  }


  const Checkbox = (props: any) => {
    return <Container className={cn({
      // "!bg-gray-100": (activeIndex ?? 0) - 1 == props?.index,
      [customeClassMulCheckbox?.containerCheckbox || '']: customeClassMulCheckbox?.containerCheckbox
    })} onMouseDown={(e) => e.preventDefault()}
      variant={"hsc"} gap={"base"}>
      <label className="relative flex items-center py-1 rounded-full cursor-pointer" htmlFor="radio">
        <input
          type="checkbox"
          name={name}
          checked={props?.isChecked}
          value={props?.option?.value}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500  before:opacity-0 before:transition-opacity  disabled:border-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed checked:border-primary checked:bg-primary checked:before:bg-primary disabled:before:!bg-none disabled:before:opacity-0 hover:before:opacity-10"
          onChange={handleOnChange}
          {...attrsInput}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <IconCheck className="icon-white" />
        </span>
      </label>
      <label className="mt-px cursor-pointer select-none" htmlFor="radio">
        {props?.option?.label}
      </label>
    </Container>
  }

  return (
    <ContainerInput {...attrsInput} onlyContainer={true}>
      <Container className={`${customeClassMulCheckbox?.containerOption}`} onScroll={attrsInput?.onScroll}>
        {
          withSelectAll && <Checkbox isChecked={isCheckAll} option={{ label: 'Select All', value: 'all' }} />
        }
        {
          options?.map((option, i) => {
            const isChecked = value?.some((data) => data === option?.value)
            return (
              <Checkbox key={i} index={i} isChecked={isChecked} option={option} />
            )
          })
        }
      </Container>
    </ContainerInput>
  )
}

export default InputMultipleCheckbox