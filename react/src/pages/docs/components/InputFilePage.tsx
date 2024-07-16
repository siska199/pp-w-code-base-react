import CardAdditionalInfoInputFile from "@components/module/input-page/inputfile-page/CardAdditionalInfoInputFile";
import CardIntroInputFile from "@components/module/input-page/inputfile-page/CardIntroInputFile";
import CardPropsInputFile from "@components/module/input-page/inputfile-page/CardPropsInputFile";
import CardUsageInputFile from "@components/module/input-page/inputfile-page/CardUsageInputFile";

const InputFilePage = () => {
  return (
    <>
      <CardIntroInputFile />
      <CardPropsInputFile />
      <CardUsageInputFile />
      <CardAdditionalInfoInputFile />
    </>
  );
}

export default InputFilePage;
