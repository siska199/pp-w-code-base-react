
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputSelect from "@components/ui/inputs/InputSelect";
import useForm from "@hooks/useForm";
import { TOption } from "@types";
import { useState } from "react";

const CardIntroInputSelect = () => {
  const initialForm = {
    'input-select': {
    },
    'input-select-multiple': {
      value: []
    }
  }
  const { form, handleOnChange } = useForm<keyof typeof initialForm>({
    initialForm
  })

  const [options, setOptions] = useState<{ [key: string]: TOption[] }>({
    listInputSelect: []
  })

  const listExample = [
    {
      component: <CardVariantComp
        title={'default '}
        withBorder={false}
        Component={<InputSelect
          onChange={handleOnChange}
          {...form['input-select']}
          options={[
            {
              label: 'SISKA',
              value: 'SISKA 123'
            },
            {
              label: 'SISKA',
              value: 'SISKA 123'
            },
            {
              label: 'SISKA',
              value: 'SISKA 123'
            }
          ]}
        />}
      />
    },
    // {
    //   component: <CardVariantComp
    //     title={'default '}
    //     withBorder={false}
    //     Component={<InputSelect
    //       onChange={handleOnChange}
    //       {...form['input-select']}
    //       options={[
    //         {
    //           label: 'SISKA',
    //           value: 'SISKA 123'
    //         },
    //         {
    //           label: 'SISKA',
    //           value: 'SISKA 123'
    //         },
    //         {
    //           label: 'SISKA',
    //           value: 'SISKA 123'
    //         }
    //       ]}
    //       isMultiple
    //     />}
    //   />
    // },
  ]
  return (
    <CardIntroComponent
      title={'Input Select'}
      subTitle="The InputSelect component is a user interface element commonly used in web development. It presents users with a dropdown list of selectable options, allowing them to choose one option at a time. Developers configure it with props such as options, value, and onChange to control its behavior and appearance within their applications."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputSelect`;

export default CardIntroInputSelect;
