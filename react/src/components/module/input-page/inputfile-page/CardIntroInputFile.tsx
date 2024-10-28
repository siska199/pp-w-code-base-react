import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputFile from "@components/ui/inputs/InputFile";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { TFileType } from "@types";

const CardIntroInputFile = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "file-input": {
        value: null,
        multiple: true,
        errorMessage: "",
        listUploadedFile:[]
      },
    },
  });

  const listExample = [
    {
      component: (
        <CardVariantComp
          title={"default "}
          withBorder={false}
          Component={
            <InputFile
              onChange={handleOnChange}
              {...form["file-input"]}
              totalSizeMax={10}
              listAcceptedFile={[TFileType.JPG, TFileType.XLSX]}
              listUploadedFile={form["file-input"]?.listUploadedFile||[]}
            />
          }
        />
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Upload"}
      subTitle="The Upload component serves the purpose of allowing users to select one or more files from their device and then transfer them to a server for storage or processing. This functionality is crucial in various applications, including content management systems, cloud storage platforms, and multimedia sharing platforms."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputFile}
    />
  );
};

export default CardIntroInputFile;
