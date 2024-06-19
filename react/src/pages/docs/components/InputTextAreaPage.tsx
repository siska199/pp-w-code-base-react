import CardAdditionalInfoInputTextArea from "@components/module/input-page/input-textarea/CardAdditionalInfoInputTextArea";
import CardIntroInputTextArea from "@components/module/input-page/input-textarea/CardIntroInputTextArea";
import CardPropsInputTextArea from "@components/module/input-page/input-textarea/CardPropsInputTextArea";
import CardUsageInputTextArea from "@components/module/input-page/input-textarea/CardUsageInputTextArea";


const InputTextAreaPage = () => {
  return (
    <>
      <CardIntroInputTextArea />
      <CardPropsInputTextArea />
      <CardUsageInputTextArea />
      <CardAdditionalInfoInputTextArea />
    </>
  );
}

export default InputTextAreaPage;
