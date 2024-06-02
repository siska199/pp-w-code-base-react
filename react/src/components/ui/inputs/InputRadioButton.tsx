/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import Container from '@components/ui/Container';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import clsx from 'clsx';


interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: {
    label: string;
    value: any;
  }[];
  value: string;
}

const InputRadioButton = (props: TProps) => {
  const { name, onChange, options, value, ...attrsInput } = props

  return (
    <ContainerInput {...attrsInput} onlyContainer={true}>
      <Container gap={"tiny"}>
        {
          options?.map((option, i) => {
            return <Container key={i} variant={"hsc"} gap={"base"}>
              <label className="relative flex border items-center rounded-full cursor-pointer" htmlFor="check">
                <input
                  type="radio"
                  name={name}
                  value={option?.value}
                  className="cursor-pointer bg-priimary peer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity disabled:border-gray-200 disabled:bg-disabled disabled:cursor-not-allowed checked:border-primary  checked:before:bg-primary disabled:before:bg-none disabled:before:opacity-0 hover:before:bg-primary hover:before:opacity-10"
                  onChange={onChange}
                  checked={option?.value === value}
                  {...attrsInput}
                />
                <div className={clsx({
                  "peer-checked:flex hidden absolute mx-auto ml-1 w-3 h-3 rounded-full bg-primary ":true,
                  "!bg-gray-200":attrsInput?.disabled && option?.value === value
                })}
                />
              </label>
              <label className="mt-px cursor-pointer select-none" htmlFor="check">
                {option?.label}
              </label>
            </Container>
          })
        }
      </Container>
    </ContainerInput>
  )
}

export default InputRadioButton