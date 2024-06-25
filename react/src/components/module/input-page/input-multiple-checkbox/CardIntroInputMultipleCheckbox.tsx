
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputMultipleCheckbox from "@components/ui/inputs/InputMultipleCheckbox";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { TOption } from "@types";
import { useState } from "react";

const CardIntroInputMultipleCheckbox = () => {

  const initialForm = {
    'input-multi-checkbox': {
      value: []
    },
  }
  const { form, handleOnChange } = useForm<keyof typeof initialForm>({
    initialForm
  })
  const [options,] = useState<{ [key: string]: TOption[] }>({
    listInputSelect: [
      { label: "Alice Johnson", value: "alice-johnson" },
      { label: "Bob Smith", value: "bob-smith" },
      { label: "Charlie Brown", value: "charlie-brown" },
    ]
  })

  const listExample = [
    {
      component: <CardVariantComp
        title={'default '}
        withBorder={false}
        Component={<InputMultipleCheckbox
          onChange={handleOnChange}
          {...form['input-multi-checkbox']}
          options={options?.listInputSelect}
        />}
      />
    },
    {
      component: <CardVariantComp
        title={'with label '}
        withBorder={false}
        Component={<InputMultipleCheckbox
          onChange={handleOnChange}
          {...form['input-multi-checkbox']}
          options={options?.listInputSelect?.map((data) => ({ ...data, value: `${data?.value} label` }))}
          label={'Input select with label'}
        />}
      />
    },
    {
      component: <CardVariantComp
        title={'with error'}
        withBorder={false}
        Component={<InputMultipleCheckbox
          onChange={handleOnChange}
          {...form['input-multi-checkbox']}
          options={options?.listInputSelect?.map((data) => ({ ...data, value: `${data?.value} error` }))}
          label={'Input select with error'}
          errorMessage="Error State : )"
        />}
      />
    },
  ]

  return (
    <CardIntroComponent
      title={'Input Multiple Checkbox'}
      subTitle="A Checkboxes is a graphical element that allows users to select or deselect options in user interfaces. It consists of a small box that can be checked or unchecked to indicate the user's choice. Checkboxes are commonly used in forms and settings menus to enable users to make multiple selections efficiently."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi?.InputMultipleCheckbox}
    />
  );
}


export default CardIntroInputMultipleCheckbox;
