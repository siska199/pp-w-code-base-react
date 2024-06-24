
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputDate from "@components/ui/inputs/InputDate";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputDate = () => {
  const initialForm = {
    "input-date": {},
    "input-date-multi-select": {
      selectsRange: true,
    }
  }

  const { form, handleOnChange } = useForm<keyof typeof initialForm>({
    initialForm
  })
  const listExample = [
    {
      component: <CardVariantComp
        title={'Single Date '}
        withBorder={false}
        Component={<InputDate
          onChange={handleOnChange}
          {...form['input-date']}
        />}
      />
    },
    {
      component: <CardVariantComp
        title={'Range Date '}
        withBorder={false}
        Component={<InputDate
          onChange={handleOnChange}
          {...form['input-date-multi-select']}
        />}
      />
    },
  ]
  return (
    <CardIntroComponent
      title={'Input Date'}
      subTitle="The InputDate component is a customizable date picker input designed for both single date and date range selections. It leverages the react-datepicker library for rich date selection features and allows customization of its appearance and behavior through various props. The component supports displaying different views such as month and year pickers, and integrates navigation buttons for changing months and years. It includes an icon that can be positioned at either the start or end of the input field. Additionally, the component handles formatting and placeholder text, ensuring a seamless user experience for date input tasks."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputDate}
    />
  );
}


export default CardIntroInputDate;
