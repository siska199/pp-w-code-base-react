
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputNPWP from "@components/ui/inputs/InputNPWP";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { TEventOnChange } from "@types";
import { useState } from "react";

const CardIntroInputNPWP = () => {

  const [form, setForm] = useState({
    'input-npwp': {
      label: 'Input NPWP',
      value: '',
      name: 'input-npwp'
    },
  })

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as keyof typeof form
    const value = e.target.value

    setForm({
      ...form,
      [name]: {
        ...form[name],
        value
      }
    })
  }

  const listExample = [
    {
      component: <CardVariantComp
        title={'default '}
        withBorder={false}
        Component={<InputNPWP
          onChange={handleOnChange}
          {...form['input-npwp']}
        />}
      />


    },

  ]
  return (
    <CardIntroComponent
      title={'Input NPWP'}
      subTitle="The InputNPWP component is designed to handle input fields formatted specifically for NPWP (Nomor Pokok Wajib Pajak), an Indonesian tax identification number."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputNPWP}
    />
  );
}


export default CardIntroInputNPWP;
