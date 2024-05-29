import { IconMessage, IconPaymentMethodVisa, IconRight } from "@assets/icons"
import Container from "@components/ui/Container"
import InputBase from "@components/ui/InputBase"


const ExampleInput = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[30rem] p-4 gap-4 flex flex-col ">
        <InputBase 
          name={"random"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElementStart={<IconMessage/>}
          customeElementEnd={<Container fit variant={"hsc"} gap={"tiny"}>
                                <p className="text-gray-400">Addons</p>
                                <IconRight/>
                                <IconPaymentMethodVisa/>
                            </Container>}
        />
        <InputBase 
          name={"random1"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElementStart={<IconMessage/>}
          disabled
        />
          <InputBase 
            name={"random2"}
            label={"Label"}
            placeholder="Input Placeholder"
            customeElementStart={<IconMessage/>}
            errorMessage="Helper text"
          />
          <InputBase 
            name={"random3"}
            label={"Label"}
            placeholder="Input Placeholder"
            customeElementStart={<IconMessage/>}
            errorMessage="Helper text"
            isRounded
          />
      </div>
      <div className="w-[30rem] p-4 gap-4 flex flex-col ">
        <InputBase 
          key={2}
          name={"random122"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElementStart={<IconMessage/>}
          isFloatingLabel
        />
        <InputBase 
          name={"random22"}
          label={"Label"}
          placeholder="Input Placeholder"
          customeElementStart={<IconPaymentMethodVisa/>}
          isFloatingLabel
          labelClass="peer-focus:!ml-[-35px]"
        />
          <InputBase 
            name={"random222"}
            label={"Label"}
            placeholder="Input Placeholder"
            errorMessage="Helper text"
            isFloatingLabel

          />
          <InputBase 
            name={"random322"}
            label={"Label"}
            placeholder="Input Placeholder"
            errorMessage="Helper text"
            isRounded
            isFloatingLabel
          />
      </div>
    </div>
  )
}

export default ExampleInput