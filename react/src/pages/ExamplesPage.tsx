import InputFile from "@components/ui/inputs/InputFile";
import useForm from "@hooks/useForm";
import { TFileType } from "@types";

const ExamplesPage = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "file-input": {
        value: null,
        multiple: false,
        errorMessage: "",
      },
    },
  });


  return (
    <div className="h-full">
      <InputFile onChange={handleOnChange} {...form["file-input"]} totalSizeMax={10} listAcceptedFile={[TFileType.JPG, TFileType.XLSX]} />
    </div>
  );
};

export default ExamplesPage;
