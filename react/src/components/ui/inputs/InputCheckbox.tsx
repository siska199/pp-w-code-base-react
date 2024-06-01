/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconChecked } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TCustomeEventOnChange } from "@types";

interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  name: string;
  onChange: (e: TCustomeEventOnChange<string[]>) => void;
  options: {
    label: string;
    value: any;
  }[];
  value: string[];
}

const InputCheckbox = (props: TProps) => {
  const { name, onChange, options, value, ...attrsInput } = props

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const updateValue = isChecked ? [...value, e.target?.value] : value?.filter(data => data !== e.target?.value)
    onChange({
      target: {
        name,
        value: updateValue
      }
    })
  }

  return (
    <ContainerInput {...attrsInput} onlyContainer={true}>
      <Container >
        {
          options?.map((option, i) => {
            const isChecked = value?.some((data) => data === option?.value)
            return (
              <Container key={i} variant={"hsc"} gap={"base"}>
                <label className="relative flex items-center py-1 rounded-full cursor-pointer" htmlFor="check">
                  <input
                    id="check"
                    type="checkbox"
                    name={name}
                    checked={isChecked}
                    value={option?.value}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity disabled:border-gray-200 disabled:bg-disabled disabled:cursor-not-allowed checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                    onChange={handleOnChange}
                    {...attrsInput}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <IconChecked className="icon-white" />
                  </span>
                </label>
                <label className="mt-px cursor-pointer select-none" htmlFor="check">
                  {option?.label}
                </label>
              </Container>
            )
          })
        }
      </Container>
    </ContainerInput>
  )
}

export default InputCheckbox