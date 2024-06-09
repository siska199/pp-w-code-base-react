/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconChecked } from "@assets/icons";
import Container from "@components/ui/Container";
import ContainerInput from "@components/ui/inputs/ContainerInput";

interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value: (any);
    classNameContainerOption?: string;
}

const InputCheckbox = (props: TProps) => {
    const { name, onChange, value, label, checked, ...attrsInput } = props

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }



    return (
        <ContainerInput {...attrsInput} onlyContainer={true}>
            <Container onMouseDown={(e) => e.preventDefault()}
                variant={"hsc"} gap={"base"} className=''>
                <label className=" relative flex items-center py-1 rounded-full cursor-pointer" htmlFor="radio">
                    <input
                        type="checkbox"
                        name={name}
                        checked={checked}
                        value={value}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500  before:opacity-0 before:transition-opacity  disabled:border-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed checked:border-primary checked:bg-primary checked:before:bg-primary disabled:before:!bg-none disabled:before:opacity-0 hover:before:opacity-10"
                        onChange={handleOnChange}
                        {...attrsInput}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <IconChecked className="icon-white" />
                    </span>
                </label>
                {
                    label && <label className="mt-px cursor-pointer select-none" htmlFor="radio">
                        {label}
                    </label>
                }

            </Container>
        </ContainerInput>
    )
}

export default InputCheckbox