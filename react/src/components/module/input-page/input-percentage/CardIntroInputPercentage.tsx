
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputPercentage from "@components/ui/inputs/InputPercentage";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputPercentage = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      'input-percentage': {}
    }
  })

  const listExample = [
    {
      component: <CardVariantComp
        title={'default '}
        withBorder={false}
        Component={<InputPercentage
          onChange={handleOnChange}
          {...form['input-percentage']}
        />}
      />
    },

  ]
  return (
    <CardIntroComponent
      title={'Input Percentage'}
      subTitle="An InputPercentage component is a specialized input field that allows users to enter a percentage value. It typically includes validation to ensure the input is within the acceptable range of 0 to 100%. This component simplifies user interactions by automatically appending the percentage symbol and handling any necessary formatting."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputPercentage}
    />
  );
}


export default CardIntroInputPercentage;
