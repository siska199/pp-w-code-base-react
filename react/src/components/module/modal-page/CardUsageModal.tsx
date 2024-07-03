
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

const displayUsage = `
  const [showModal, setShowModal] = useState(false)
  return <div>
          <Button label={'Show Modal'} onClick={() => handleToggleModal()} />
          <ContainerModal isShow={showModal[variant]}  onClose={() => handleToggleModal()} variant={variant}>
            <div>
              <div>
                <h5 className="text-body-large text-black font-medium">A short modal heading</h5>
                <p>The message displayed in the modal dialog should be simple and easy to understand.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <Button label={'Cancel'} variant={"solid-white"} className="w-full" />
                <Button label={'Save'} className="w-full" />
              </div>
            </div>
          </ContainerModal>
        </div>`;

export default CardUsageModal;
