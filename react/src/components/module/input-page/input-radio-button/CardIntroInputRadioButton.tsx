import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputRadioButton from "@components/ui/inputs/InputRadioButton";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputRadioButton = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "input-phone-number": {
        value: "bob-smith",
      },
    },
  });

  const options = [
    { label: "Alice Johnson", value: "alice-johnson" },
    { label: "Bob Smith", value: "bob-smith" },
    { label: "Charlie Brown", value: "charlie-brown" },
  ];

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputRadioButton onChange={handleOnChange} {...form["input-phone-number"]} options={options} />} />,
    },
  ];
  return (
    <CardIntroComponent
      title={"Input Radio Button"}
      subTitle="A radio button is a GUI element that allows users to select one option from a set of mutually exclusive choices, typically represented as a small circle that can be either filled (selected) or empty (unselected). Each radio button is paired with a label to describe the option it represents. Only one radio button in a group can be selected at a time, ensuring that the user's choice is clear and singular."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputRadioButton}
    />
  );
};

export default CardIntroInputRadioButton;
