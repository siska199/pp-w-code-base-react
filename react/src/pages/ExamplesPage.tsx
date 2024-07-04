import ExampleTable from "@components/examples/ExampleTable";
import Tooltip from "@components/ui/Tooltip";

const ExamplesPage = () => {
  return (
    <div className='border p-4 w-full flex justify-center items-center flex-col'>
      <Tooltip text={"Top"} variant="top">
        Top TESTED 123
      </Tooltip>
      <Tooltip text={"Bottom"} variant="bottom">
        Bottom TESTED 123
      </Tooltip>
      <Tooltip text={"Left"} variant="left">
        Left SISKA APRIAN RIFIANTI MAKNA BAKSOOOO
      </Tooltip>
      <Tooltip text={"Right"} variant="right">
        Right 
      </Tooltip>
    </div>
  );
};

export default ExamplesPage;