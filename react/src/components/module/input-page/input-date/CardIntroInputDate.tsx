
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
      subTitle="An InputDate component is used in web and mobile applications to facilitate the selection of dates. It provides a user-friendly interface such as a calendar widget or dropdowns for choosing dates, ensuring data entry accuracy and consistency. InputDate components often include features like date validation and formatting options to suit different date formats and regional preferences."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputDate}
    />
  );
}


export default CardIntroInputDate;
