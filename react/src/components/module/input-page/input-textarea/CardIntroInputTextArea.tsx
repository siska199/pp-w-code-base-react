import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputTextArea from "@components/ui/inputs/InputTextArea";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputTextArea = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "input-text-area": {
        value: "",
      },
    },
  });

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputTextArea onChange={handleOnChange} {...form["input-text-area"]} />} />,
    },
  ];

  return (
    <CardIntroComponent
      title={"Input Text Area"}
      subTitle="A TextArea component is a multi-line input field used in web and mobile applications to allow users to enter larger amounts of text. Unlike a standard text input, it supports line breaks and can be resized by the user for better readability. TextAreas are commonly used for comments, feedback, and detailed text entries."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputTextArea}
    />
  );
};

export default CardIntroInputTextArea;
