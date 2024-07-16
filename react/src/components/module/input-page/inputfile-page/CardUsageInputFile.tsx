import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageInputFile = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of InputFile:</p>
      <CodeBlock codeString={generateDisplayComponent("InputFile", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  '\nconst [form, setForm] = useState({\n  "file-input": {\n    value: null,\n    multiple: true,\n    errorMessage: "",\n    listUploadedFile: [],\n  }})\n\n  const handleOnChange = (e: TEventOnChange) => {\n    const name = e.target.name as TKey;\n    const value = e.target.value;\n\n    const updatedForm = {\n      ...form,\n      [name]: {\n        ...form[name],\n        value,\n      },\n    };\n    setForm(updatedForm);\n  };\n\n  return <InputFile\n          onChange={handleOnChange}\n          {...form["file-input"]}\n          totalSizeMax={10}\n          listAcceptedFile={[TFileType.JPG, TFileType.XLSX]}\n          isDirectUpload={true}\n          endpoint={endpoints.uploadFile}\n          additionalPayload={{\n            upload_preset: "my-uploads",\n          }}\n          listUploadedFile={form?.["file-input"]?.listUploadedFile || []}\n        />\n';

export default CardUsageInputFile;
