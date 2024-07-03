
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Button from "@components/ui/Button";
import ContainerModal from "@components/ui/modal/ContainerModal";
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
          <ContainerModal isShow={showModal[variant]} onClose={() => handleToggleModal(variant)} variant={variant}>
            <div>
              SISKA EFFECT VARIANT {variant}
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
      subTitle="Description of Modal."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Modal`;

export default CardIntroModal;
