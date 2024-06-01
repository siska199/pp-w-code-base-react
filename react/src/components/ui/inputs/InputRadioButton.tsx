import { TBasePropsInput } from '@/types/ui/index';


interface TProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  // name: string;
  // onChange: (e: TCustomeEventOnChange<string[]>) => void;
  // options: {
  //   label: string;
  //   value: any;
  // }[];
  // value: string;
}

const InputRadioButton = (props: TProps) => {
  // const { name, onChange, options, value } = props

  return (
    <div>

      <div className="form-group">
        <input type="radio"  />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  )
}

export default InputRadioButton