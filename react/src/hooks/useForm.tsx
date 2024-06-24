import { TObject } from '@types';
import { useMemo, useState } from 'react';

interface TPropsForm{
  initialForm :TObject
}


interface TForm {
  [key : string]: TObject & {
    value: string;
    name: string;
  }
}

  
const useForm = (props : TPropsForm) => {
  const {initialForm} = props
    
  const defaultForm = useMemo(() => {
    const form:TForm = {};

    Object.keys(initialForm).forEach((key) => {
      form[key] = {
        name:  key,
        ...initialForm[key],
        value : initialForm[key]?.value || ''
      };
    });

    return form;
  }, [initialForm]);

  const [form, setForm] = useState<TForm>(defaultForm);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: {
        ...form[name],
        value
      }
    });
  };

  return {
    form,
    setForm,
    handleOnChange
  };
};


export default useForm;
