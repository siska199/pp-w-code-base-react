import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputNPWP from "@components/ui/inputs/InputNPWP";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputNPWP = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "input-npwp": {
        value: "",
      },
    },
  });

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputNPWP onChange={handleOnChange} {...form["input-npwp"]} />} />,
    },
  ];
  return <CardIntroComponent title={"Input NPWP"} subTitle="The InputNPWP component is designed to handle input fields formatted specifically for NPWP (Nomor Pokok Wajib Pajak), an Indonesian tax identification number." listExample={listExample} displayCodeBase={codeStringComponentUi.InputNPWP} />;
};

export default CardIntroInputNPWP;
