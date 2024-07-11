
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageModal = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Modal:</p>
      <CodeBlock codeString={generateDisplayComponent('Modal', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = "\n  const [showModal, setShowModal] = useState(false)\n  return <div>\n          <Button label={'Show Modal'} onClick={() => setShowModal(true)} />\n          <ContainerModal isShow={showModal}  onClose={() => setShowModal(false)} variant={variant}>\n            <div>\n              <div>\n                <h5 className=\"text-body-large text-black font-medium\">A short modal heading</h5>\n                <p>The message displayed in the modal dialog should be simple and easy to understand.</p>\n              </div>\n              <div className=\"grid grid-cols-2 gap-2 mt-3\">\n                <Button label={'Cancel'} variant={\"solid-white\"} className=\"w-full\" />\n                <Button label={'Save'} className=\"w-full\" />\n              </div>\n            </div>\n          </ContainerModal>\n        </div>"

export default CardUsageModal;
