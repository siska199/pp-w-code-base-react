import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsInputFile = () => {
  const listItem = [
    {
      label: "name",
      content: "The name attribute for the input field.",
    },
    {
      label: "onChange",
      content: "A function called when the input value changes.",
    },
    {
      label: "value",
      content: "The current value of the input field.",
    },
    {
      label: "multiple",
      content: "Allows multiple file selection if true.",
    },
    {
      label: "listAcceptedFile",
      content: "An array of accepted file types for validation.",
    },
    {
      label: "totalSizeMax",
      content: "Maximum total size allowed for uploaded files, in megabytes.",
    },
    {
      label: "isDirectUpload",
      content: "Determines if files should be uploaded directly to a server.",
    },
    {
      label: "endpoint",
      content: "The server endpoint for file upload.",
    },
    {
      label: "additionalPayload",
      content: "Additional data to send along with the file upload request.",
    },
    {
      label: "listUploadedFile",
      content: "Array of files that have been successfully uploaded.",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsInputFile;
