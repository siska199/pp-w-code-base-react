import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputPhoneNumber from "@components/ui/inputs/InputPhoneNumber";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputPhoneNumber = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "input-phone-number": {
        value: "09099572935",
      },
    },
  });

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputPhoneNumber onChange={handleOnChange} {...form["input-phone-number"]} />} />,
    },
  ];

  return (
    <CardIntroComponent
      title={"Input Phone Number"}
      subTitle="The InputPhoneNumber component integrates with ContainerInput to manage formatted phone number input. It utilizes the useFormattedInput hook to enforce a specific format (XX-XXX-XXX-XXX) and handle input changes accordingly. The component includes a prefix of +62 within ContainerInput, enhancing user experience by visually indicating the country code. It dynamically adjusts the input field's placeholder based on the component's variant prop, ensuring flexibility in different UI contexts. Overall, InputPhoneNumber facilitates seamless input handling and format enforcement for phone numbers in React applications."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputPhoneNumber}
    />
  );
};

export default CardIntroInputPhoneNumber;
