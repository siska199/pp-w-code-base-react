
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputDate from "@components/ui/inputs/InputDate";
import useForm from "@hooks/useForm";

const CardIntroInputDate = () => {
    const initialForm =  {
      "input-date":{},
      "input-date-multi-select":{
        selectsRange:true,
      }
    }

    const {form, handleOnChange} = useForm<keyof typeof initialForm>({
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
      subTitle="Description of InputDate."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputDate`;

export default CardIntroInputDate;
