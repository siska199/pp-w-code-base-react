import Button from "@components/ui/Button";
import InputFile from "@components/ui/inputs/InputFile";
import useAPI from "@hooks/useAPI";
import useForm from "@hooks/useForm";
import { TFileType } from "@types";

const ExamplesPage = () => {
  const { apiClient, progress } = useAPI();
  const { form, handleOnChange } = useForm({
    initialForm: {
      "file-input": {
        value: null,
        multiple: false,
        errorMessage: "",
      },
    },
  });

  const handleOnSubmit = async () => {
    const result = await apiClient({
      endpoint: "https://api.cloudinary.com/v1_1/university-state-of-malang-city/image/upload",
      isForm: true,
      payload: {
        file: form["file-input"]?.value,
        upload_preset: "my-uploads",
      },
    });

    console.log("result: ", result);
  };

  return (
    <div className="h-full">
      <InputFile onChange={handleOnChange} {...form["file-input"]} totalSizeMax={10} listAcceptedFile={[TFileType.JPG, TFileType.XLSX]} />
      <Button label="Submit File" onClick={handleOnSubmit} />
      {progress}
    </div>
  );
};

export default ExamplesPage;
