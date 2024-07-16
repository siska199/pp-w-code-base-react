import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoInputFile = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: "Enables users to select files via drag-and-drop or file selection dialog. Validates file types and sizes before initiating direct uploads.",
    },

    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputFile</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconClose" to="/docs/prerequisite/icon?name=IconClose" />,
          <Filename name="IconFile" to="/docs/prerequisite/icon?name=IconFile" />,
          <Filename name="ContainerInput" to="/docs/prerequisite/helper-component?id=ContainerInput.tsx" />,
          <Filename name="Progressbar" to="/docs/components/progressbar" />,
          <Filename name="Tooltip" to="/docs/components/tooltip" />,
          <Filename name="useAPI" to="/docs/prerequisite/hook?id=useAPI" />,
          <Filename name="bytesToMegabytes" to="/docs/prerequisite/helper-function?id=bytesToMegabytes" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="delay" to="/docs/prerequisite/helper-function?id=delay" />,
          <Filename name="isEmptyValue" to="/docs/prerequisite/helper-function?id=isEmptyValue" />,
          <Filename name="truncateName" to="/docs/prerequisite/helper-function?id=truncateName" />,
          <Filename name="TBasePropsInput,TCustomeEventOnChange,TFileType,TObject,TUploadedFile" to="/docs/prerequisite/types" />,
          <Filename name="useEffect" importFrom="react" />,
          <Filename name="useRef" importFrom="react" />,
          <Filename name="useState" importFrom="react" />, ,and
          <Filename name="React" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Direct Upload",
      caption: "Supports direct file upload to specified `endpoint` with progress tracking (`isDirectUpload: true`). Manages selected files without immediate upload (`isDirectUpload: false`).",
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoInputFile;
