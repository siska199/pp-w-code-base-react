
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const CardAlertUsage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Alert:</p>
      <CodeBlock codeString={displayUsage} />
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
      Sukses makan
    </Alert>
  </div>
`;

export default CardAlertUsage;