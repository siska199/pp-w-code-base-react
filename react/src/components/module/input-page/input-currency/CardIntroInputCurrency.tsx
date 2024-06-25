
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputCurrency from "@components/ui/inputs/InputCurrency";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputCurrency = () => {
  const {form, handleOnChange} =useForm({
    initialForm: {
      'input-currency':{}
    }
  }) 

  const listExample = [
    {
      component: <CardVariantComp
        title={'default (IDR)'}
        withBorder={false}
        Component={<InputCurrency
          onChange={handleOnChange}
          {...form['input-currency']}
        />}
      />


    },

  ]
  return (
    <CardIntroComponent
      title={'Input Currency'}
      subTitle="The InputCurrency component is tailored for handling input fields where users are expected to input currency values in Indonesian Rupiah (IDR) format."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputCurrency}
    />
  );
}


export default CardIntroInputCurrency;
