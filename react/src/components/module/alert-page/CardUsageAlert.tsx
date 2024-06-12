
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageAlert = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Alert:</p>
      <CodeBlock codeString={generateDisplayComponent("Alert", displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert)
  }
  return  <div className="flex flex-col items-center gap-4">
    <Button variant={"white"} onClick={handleToggleAlert} >Show Alert</Button>
    <Alert variant="success" withCloseBtn show={showAlert} onDismiss={handleToggleAlert}>
       mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
    </Alert>
  </div>
`;

export default CardUsageAlert;
