import { IconMessage, IconPaymentMethodVisa, IconRight } from "@assets/icons"
import Container from "@components/ui/Container"
import InputBase from "@components/ui/inputs/InputBase"
import InputTextArea from "@components/ui/inputs/InputTextArea"


const ExampleInput = () => {


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e?.target?.name
    const value = e?.target?.value

    console.log("name: ", name)
    console.log('value:', value)
  }
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
          customeClass={{ label: "peer-focus:!ml-[-35px]" }}
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
          customeClass={{ label: "peer-focus:!ml-[-35px]" }}
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
          customeClass={{ label: "peer-focus:!ml-[-35px]" }}
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
          customeClass={{ label: "peer-focus:!ml-[-35px]" }}
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
    </div>
  )
}

export default ExampleInput