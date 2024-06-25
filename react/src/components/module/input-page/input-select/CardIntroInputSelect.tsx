
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
    },
    'input-select--select-all': {
      value: []
    }
  }
  const { form, handleOnChange } = useForm<keyof typeof initialForm>({
    initialForm
  })

  const [options,] = useState<{ [key: string]: TOption[] }>({
    listInputSelect: [
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
      },
      {
        label: 'Koko melon',
        value: 'koko melon 2'
      },
      {
        label: 'Koko melon',
        value: 'koko melon 2'
      },
      {
        label: 'Koko melon',
        value: 'koko melon 2'
      },
      {
        label: 'Koko melon',
        value: 'koko melon 2'
      }
    ]
  })

  const handleOnLoadMore = async () => {
    try {
      console.log("tested")
    } catch (error: unknown) {
      if (error instanceof Error) return error.message
    }
  }

  const listExample = [
    {
      component: <CardVariantComp
        title={'default '}
        withBorder={false}
        Component={<InputSelect
          onChange={handleOnChange}
          {...form['input-select']}
          options={options?.listInputSelect}
        />}
      />
    },
    {
      component: <CardVariantComp
        title={'Multiple Select'}
        withBorder={false}
        Component={<InputSelect
          onChange={handleOnChange}
          {...form['input-select-multiple']}
          options={options?.listInputSelect}
          isMultiple
        />}
      />
    },
    {
      component: <CardVariantComp
        title={'Multiple Select (With Select All)'}
        withBorder={false}
        Component={<InputSelect
          onChange={handleOnChange}
          {...form['input-select--select-all']}
          options={options?.listInputSelect}
          isMultiple
          withSelectAll
          onLoadMore={handleOnLoadMore}
        />}
      />
    },
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
