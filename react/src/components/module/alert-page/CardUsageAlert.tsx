import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageAlert = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Alert:</p>
      <CodeBlock codeString={generateDisplayComponent("Alert", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `  
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert)
  }

  return  <div className="flex flex-col items-center gap-4">
        <Button label={'Show Alert'} variant={"solid-white"} onClick={() => handleToggleAlert()} />
        <Alert type="success" withCloseBtn show={showAlert} onDismiss={handleToggleAlert} message={'mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!'} />
  </div>
`;

export default CardUsageAlert;
