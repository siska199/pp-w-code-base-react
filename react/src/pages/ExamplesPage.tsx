import InputFile from "@components/ui/inputs/InputFile";
import useForm from "@hooks/useForm";

const ExamplesPage = () => {
  const { form, handleOnChange } = useForm({
    initialForm: {
      "file-input": {
        value: null,
      },
    },
  });

  return (
    <div className="h-full">
      <InputFile onChange={handleOnChange} {...form["file-input"]} listAcceptedFile={["*"]}/>
    </div>
  );
};

export default ExamplesPage;
