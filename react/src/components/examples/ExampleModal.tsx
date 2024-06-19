/* eslint-disable react/jsx-handler-names */
import Button from "@components/ui/Button"
import ContainerModal from "@components/ui/modal/ContainerModal"
import { useState } from "react"


const ExampleModal = () => {
    const [show1, setShow1] = useState(false)
    return (
        <>
            <Button label={"Show modal 1"} onClick={() => setShow1(true)} />
            {/* <ModalConfirmation title={"A short modal heading"} isShow={show1} onClose={() => setShow1(false)}>
                The message displayed in the modal dialog should be simple and easy to understand.
            </ModalConfirmation> */}
            <ContainerModal isShow={show1} onClose={() => setShow1(false)} variant={"effect-3"}>
                <div>
                    SISKA
                </div>
            </ContainerModal>
        </>
    )
}

export default ExampleModal