
import CardIntroModal from "@components/module/modal-page/CardIntroModal";
import CardPropsModal from "@components/module/modal-page/CardPropsModal";
import CardUsageModal from "@components/module/modal-page/CardUsageModal";
import CardAdditionalInfoModal from "@components/module/modal-page/CardAdditionalInfoModal";

const ModalPage = () => {
  return (
    <>
      <CardIntroModal />
      <CardPropsModal />
      <CardUsageModal />
      <CardAdditionalInfoModal />
    </>
  );
}

export default ModalPage;
