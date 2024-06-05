import { IconMessage, IconPaymentMethodVisa, IconRight } from "@assets/icons"
import Container from "@components/ui/Container"
import InputBase from "@components/ui/inputs/InputBase"
import InputCheckbox from "@components/ui/inputs/InputCheckbox"
import InputCurrency from "@components/ui/inputs/InputCurrency"
import InputDate from "@components/ui/inputs/InputDate"
import InputNPWP from "@components/ui/inputs/InputNPWP"
import InputOTP from "@components/ui/inputs/InputOTP"
import InputPercentage from "@components/ui/inputs/InputPercentage"
import InputPhoneNumber from "@components/ui/inputs/InputPhoneNumber"
import InputRadioButton from "@components/ui/inputs/InputRadioButton"
import InputSelect from "@components/ui/inputs/InputSelect"
import InputTextArea from "@components/ui/inputs/InputTextArea"
import { TCustomeEventOnChange, TEmptyValue } from "@types"
import { useState } from "react"


const ExampleInput = () => {



  const [valuePercentage, setValuePercentage] = useState("")
  const [valueNpwp, setValueNpwp] = useState("")
  const [valuePhone, setValuePhone] = useState("")
  const [valueDate, setValueDate] = useState<Date | string | TEmptyValue>()
  const [valueCurrency, setValueCurrency] = useState("")
  const [valueIsOTPValid, setValueIsOTPValid] = useState<boolean>(true)
  const [valueCheckbox, setValueCheckbox] = useState<string[]>(["Songkang"])
  const [valueRadio, setValueRadio] = useState<string>("Songkang")
  const [valueSelect, setValueSelect] = useState<string>("")
  const [valueSelectMultiple, setValueSelectMultiple] = useState<string[]>([])
  const [valueSelectMultipleSelectAll, setValueSelectMultipleSelectAll] = useState<string[]>([])


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | TCustomeEventOnChange<Date | boolean | string[] | string>) => {
    const name = e?.target?.name
    const value = e?.target?.value
    if (name === "input-percentage") {
      setValuePercentage(String(value))
    }
    if (name === "input-npwp") {
      setValueNpwp(String(value))
    }

    if (name === "input-phone") {
      setValuePhone(String(value))
    }
    if (name === "input-date" && (value instanceof Date || (!value && (typeof value !== "boolean")))) {
      const date = value
      setValueDate(date)
    }
    if (name === "input-currency") {
      setValueCurrency(String(value))
    }

    if (name === "input-otp") {
      setValueIsOTPValid(valueIsOTPValid)
    }

    if (name === "input-checkbox" && Array.isArray(value)) {
      setValueCheckbox(value)
    }
    if (name === "input-radio") {
      setValueRadio(String(value))
    }
    if (name === "input-select") {
      setValueSelect(value)
    }
    if (name === "input-select-multiple") {
      setValueSelectMultiple(value)
    }
    if (name === "input-select-multiple-selectall") {
      setValueSelectMultipleSelectAll(value)
    }
  }
  const listOption = [
    { label: "jiji label", value: "jiji value" },
    { label: "jimbun label", value: "jimbun value" },
    { label: "SISKA AP label", value: "siska1 value" },
    { label: "SISKA AP2 label", value: "siska2 value" },
    { label: "SISKA AP3 label", value: "siska3 value" },
    { label: "makan label", value: "makan value" },
    { label: "lala label", value: "lala value" },
    { label: "koko melon label", value: "koko value" },
    { label: "lulu label", value: "lulu value" },
    { label: "lili label", value: "lili value" },

  ]
  return (
    <div className="flex flex-col gap-4">
      <h4>Input Base</h4>
      <div className=" p-4 gap-4 flex ">
        <InputBase
          name={"random"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{
            start: <IconMessage />,
            end: <Container fit variant={"hsc"} gap={"tiny"} >
              <p className="text-gray-400">Addons</p>
              <IconRight />
              <IconPaymentMethodVisa />
            </Container>
          }}
          onChange={handleOnChange}
        />
        <InputBase
          name={"random"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{
            start: <IconMessage />,
            end: <Container fit variant={"hsc"} gap={"tiny"} >
              <p className="text-gray-400">Addons</p>
              <IconRight />
              <IconPaymentMethodVisa />
            </Container>
          }}
          onChange={handleOnChange}
        />
        <InputBase
          name={"random1"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconMessage /> }}
          disabled
          onChange={handleOnChange}
        />
        <InputBase
          name={"random1"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconMessage /> }}
          disabled
          onChange={handleOnChange}
        />
        <InputBase
          name={"random2"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconMessage /> }}
          errorMessage="Helper text"
          onChange={handleOnChange}
        />
      </div>

      <div className=" p-4 gap-4 flex ">

        <InputBase
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconPaymentMethodVisa /> }}
          variant="v2"
          onChange={handleOnChange}
        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v2"
          onChange={handleOnChange}
        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v2"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v2"
          onChange={handleOnChange}

        />
      </div>

      <div className=" p-4 gap-4 flex ">
        <InputBase
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconPaymentMethodVisa /> }}
          variant="v3"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v3"
          onChange={handleOnChange}


        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v3"
          onChange={handleOnChange}


        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v3"
          onChange={handleOnChange}

        />
      </div>

      <div className=" p-4 gap-4 flex ">
        <InputBase
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconPaymentMethodVisa /> }}
          variant="v4"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v4"
          onChange={handleOnChange}


        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v4"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v4"
          onChange={handleOnChange}

          disabled
        />
      </div>
      <div className=" p-4 gap-4 flex ">
        <InputBase
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElement={{ start: <IconPaymentMethodVisa /> }}
          variant="v5"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random222"}
          label={"Label"}
          placeholder="Input Placeholder"
          errorMessage="Helper text"
          variant="v5"
          onChange={handleOnChange}


        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v5"
          onChange={handleOnChange}

        />
        <InputBase
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v5"
          disabled
          onChange={handleOnChange}

        />
      </div>
      <h4>Input Text Area</h4>
      <div className=" p-4 gap-4 flex ">
        <InputTextArea
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v1"
          onChange={handleOnChange}

        />
        <InputTextArea
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v3"
          onChange={handleOnChange}


        />

        <InputTextArea
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v5"
          onChange={handleOnChange}

          disabled
        />
        <InputTextArea
          name={"random322"}
          label={"Label"}
          placeholder="Input Placeholder"
          variant="v4"
          onChange={handleOnChange}

        />
        <InputTextArea
          name={"random222"}
          label={"Label"}
          errorMessage="Helper text"
          variant="v2"
          onChange={handleOnChange}


        />
      </div>
      <h4>Input Password</h4>
      <div className=" p-4 gap-4 flex w-[30rem]">
        <InputBase
          name={"random"}
          label={"Label"}
          placeholder="Input Placeholder"
          onChange={handleOnChange}
          type="password"
        />
      </div>
      <h4>Input Number</h4>
      <div className=" p-4 gap-4 flex w-[30rem]">
        <InputBase
          name={"random"}
          label={"Label"}
          placeholder="Input Placeholder"
          onChange={handleOnChange}
          type="number"
        />
      </div>
      <h4>Input Percentage</h4>
      <div className=" p-4 gap-4 flex w-[30rem]">
        <InputPercentage
          name={"input-percentage"}
          label={"Label"}
          placeholder="Input Placeholder"
          value={valuePercentage}
          onChange={handleOnChange}
          type="percentage"
        />
      </div>
      <h4>Input NPWP</h4>
      <div className=" p-4 gap-4 flex w-[30rem]">
        <InputNPWP
          name={"input-npwp"}
          label={"Label"}
          placeholder="Input Placeholder"
          value={valueNpwp}
          onChange={handleOnChange}
          type="npwp"
        />
      </div>
      <h4>Input Phone Number Indonesia</h4>
      <div className=" p-4 gap-4 flex w-[30rem]">
        <InputPhoneNumber
          name={"input-phone"}
          label={"Label"}
          placeholder="Input Placeholder"
          value={valuePhone}
          onChange={handleOnChange}
          type="phone"
        />
      </div>
      <h4>Input Date</h4>
      <div className="p-4 gap-4 flex flex-col w-[30rem] ">
        <InputDate
          value={valueDate as Date}
          onChange={handleOnChange}
          name="input-date"
          placeholder="Start Date"
        />
        <InputDate
          value={valueDate as Date}
          onChange={handleOnChange}
          name="input-date"
          placeholder="Start Date"
          disabled
          label={"Start Date"}
        />
        <InputDate
          value={valueDate as Date}
          onChange={handleOnChange}
          name="input-date"
          placeholder="Start Date"
          errorMessage="Error message"
          label={"End Date"}
        />
        <InputDate
          value={valueDate as Date}
          onChange={handleOnChange}
          name="input-date"
          placeholder="Start Date"
          iconPosition="end"
        />
      </div>

      <h4>Input Currency</h4>
      <div className="p-4 gap-4 flex flex-col w-[30rem]">
        <InputCurrency
          name="input-currency"
          value={valueCurrency}
          onChange={handleOnChange}
          customeElement={{
            start: <div>RP</div>
          }}
          placeholder="Input Currency"
        />
      </div>

      <h4>Input OTP</h4>
      <div className="p-4 gap-4 flex flex-col w-[30rem]">
        <InputOTP
          name="input-otp"
          numberOfDigits={4}
          correctOTP="1234"
          onChange={handleOnChange}
        />
      </div>

      <h4>Input Checkbox</h4>
      <div className="p-4 gap-4 flex flex-col w-[30rem]">
        <InputCheckbox
          name="input-checkbox"
          onChange={handleOnChange}
          options={[
            {
              label: "Song kang",
              value: "Songkang"
            },
            {
              label: "Sun Jae",
              value: "Sunjae"
            },
            {
              label: "Makan bakso",
              value: "makan bakso"
            }
          ]}
          value={valueCheckbox}
        />
        <InputCheckbox
          name="input-checkbox"
          onChange={handleOnChange}
          options={[
            {
              label: "Song kang",
              value: "Songkang"
            },
            {
              label: "Sun Jae",
              value: "Sunjae"
            },
            {
              label: "Makan bakso",
              value: "makan bakso"
            }
          ]}
          value={valueCheckbox}
          disabled
          label={'Siska Apriana Rifianti'}
          errorMessage="Error message"
        />
      </div>

      <h4>Input Radio Button</h4>
      <div className="p-4 gap-4 flex flex-col w-[30rem]">
        <InputRadioButton
          name="input-radio"
          onChange={handleOnChange}
          options={[
            {
              label: "Song kang",
              value: "Songkang"
            },
            {
              label: "Sun Jae",
              value: "Sunjae"
            },
            {
              label: "Makan bakso",
              value: "makan bakso"
            }
          ]}
          value={valueRadio}
        />
        <InputRadioButton
          name="input-radio"
          onChange={handleOnChange}
          options={[
            {
              label: "Song kang",
              value: "Songkang"
            },
            {
              label: "Sun Jae",
              value: "Sunjae"
            },
            {
              label: "Makan bakso",
              value: "makan bakso"
            }
          ]}
          value={valueRadio}
          disabled
        />
        <InputRadioButton
          name="input-radio"
          onChange={handleOnChange}
          options={[
            {
              label: "Song kang",
              value: "Songkang"
            },
            {
              label: "Sun Jae",
              value: "Sunjae"
            },
            {
              label: "Makan bakso",
              value: "makan bakso"
            }
          ]}
          value={valueRadio}
          errorMessage="SISKA COMEL"
          label="HOHO HIHI"
        />
      </div>

      <h4>Input Select</h4>
      <div className=" p-4 gap-4 flex w-full flex-col ">
        <InputSelect
          name="input-select"
          label={"Input Slect"}
          onChange={handleOnChange}
          value={valueSelect}
          options={listOption}
        />
        <InputSelect
          name="input-select-multiple"
          label={"Input Select Multiple"}
          onChange={handleOnChange}
          value={valueSelectMultiple}
          options={listOption}
          isMultiple
        />
        <InputSelect
          name="input-select-multiple-selectall"
          label={"Input Select Multiple Select All"}
          onChange={handleOnChange}
          value={valueSelectMultipleSelectAll}
          options={listOption}
          isMultiple
          withSelectAll

        />
      </div>
    </div>
  )
}

export default ExampleInput