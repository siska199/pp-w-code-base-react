import { TEventOnChange } from '@types';
import { TBasePropsInput } from '@/types/ui/index';
import { useMemo, useState } from 'react';

interface TPropsForm {
  initialForm: Record<string, any>; // Adjust TObject as needed
}

type TForm<T extends string> = Record<T, Record<string, any> & TBasePropsInput & { name: T; value: any }>;

const useForm = <T extends string>({ initialForm }: TPropsForm) => {
  const defaultForm = useMemo(() => {
    const form: TForm<T> = {} as TForm<T>;

    Object.keys(initialForm).forEach((key) => {
      form[key as T] = {
        name: key,
        ...initialForm[key],
        value: initialForm[key]?.value || '',
      };
    });

    return form;
  }, [initialForm]);

  const [form, setForm] = useState<TForm<T>>(defaultForm);

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as T;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: {
        ...form[name],
        value,
      },
    });
  };

  return {
    form,
    setForm,
    handleOnChange,
  };
};

export default useForm;
