import { TEventOnChange, TForm } from "@types";
import { useMemo, useState } from "react";

interface TPropsForm<TKey extends string> {
  initialForm: TForm<TKey, false>; // Adjust TObject as needed
}

const useForm = <TKey extends string>({ initialForm }: TPropsForm<TKey>) => {
  const defaultForm = useMemo(() => {
    const form: TForm<TKey> = {} as TForm<TKey>;

    Object.keys(initialForm).forEach((key) => {
      const rKey = key as TKey;
      form[rKey] = {
        name: key,
        ...initialForm[rKey],
        value: initialForm[rKey]?.value,
      };
    });

    return form;
  }, [initialForm]);

  const [form, setForm] = useState<TForm<TKey>>(defaultForm);

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as TKey;
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
