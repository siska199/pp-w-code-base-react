
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputPercentage from "@components/ui/inputs/InputPercentage";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputPercentage = () => {
  const {form, handleOnChange} =useForm({
    initialForm: {
      'input-percentage':{}
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
      subTitle="The InputPercentage component in React handles percentage input values, formatting them to ensure they adhere to standard percentage rules. It uses regular expressions to validate and format input, restricting values to between 0 and 100 with up to two decimal places. The component integrates an icon (IconPercentage) and leverages ContainerInput for enhanced UI functionality, including placeholder management and event handling (onChange). This makes it suitable for applications requiring controlled and formatted percentage input fields within a styled container, ensuring user-friendly interaction and validation."
      listExample={listExample }
      displayCodeBase={codeStringComponentUi.InputPercentage}
    />
  );
}


export default CardIntroInputPercentage;
