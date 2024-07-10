import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputCheckbox from "@components/ui/inputs/InputCheckbox";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputCheckbox = () => {
  const { form, handleOnChange } = useForm<"input-checkbox">({
    initialForm: {
      "input-checkbox": {
        value: true,
        checked: true,
        label: "Siska Apriana Rifianti",
      },
    },
  });

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputCheckbox onChange={handleOnChange} {...form["input-checkbox"]} />} />,
    },
  ];

  return (
    <CardIntroComponent
      title={"Input Checkbox"}
      subTitle="A single checkbox is an HTML input element that allows users to select or mark a single option from a set of choices. It's commonly used in forms where users are asked to agree to terms and conditions or to indicate a yes/no preference."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputCheckbox}
    />
  );
};

export default CardIntroInputCheckbox;
