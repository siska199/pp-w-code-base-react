
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Button from "@components/ui/Button";
import ContainerModal from "@components/ui/modal/ContainerModal";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { useState } from "react";

const CardIntroModal = () => {
  const variantModal = {
    "fadein-scaleup": "",
    "slide-formright": "",
    "drawer": ""
  }

  const [showModal, setShowModal] = useState({
    "fadein-scaleup": false,
    "slide-formright": false,
    "drawer": false
  })


  const handleToggleModal = (variant: keyof typeof variantModal) => {
    setShowModal({
      ...showModal,
      [variant]: !showModal[variant]
    })
  }


  const listExample = [
    {
      component: <CardVariousCompVariant<typeof variantModal>
        customeClass={{
          container: "flex-col w-full",
          containerCardVariant: "w-full"
        }}
        variant={variantModal}
        groups={Object.keys(variantModal)}
        isLogicSplitGroupKey={false}
        Component={(variant) => <div>
          <Button label={`Show Modal`} onClick={() => handleToggleModal(variant)} />
          <ContainerModal isShow={showModal[variant]} className={`${variant !== "drawer" && 'w-[25rem] !h-fit'}`} onClose={() => handleToggleModal(variant)} variant={variant}>
            <div className={`${variant === "drawer" && 'w-[25rem] !h-fit mx-auto py-6'}`}>
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
        </div>}
        withGroupName={false}
        withBorder={false}
      />
    },
  ]
  return (

    <CardIntroComponent
      title={'Modal'}
      subTitle="A modal component is a UI element used to display content or functionality that temporarily overlays the main content of a webpage or application. It typically serves the purpose of focusing user attention on specific information or tasks while dimming or obscuring the rest of the interface."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi?.ContainerModal}
    />
  );
}

export default CardIntroModal;
