/* eslint-disable react/jsx-handler-names */
import Button from "@components/ui/Button"
import ContainerModal from "@components/ui/modal/ContainerModal"
import { useState } from "react"


const ExampleModal = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    return (
        <>
            <Button label={"Show modal 1"} onClick={() => setShow1(true)} />
            <Button label={"Show modal 2"} onClick={() => setShow2(true)} />
            <Button label={"Show modal 3"} onClick={() => setShow3(true)} />


            <ContainerModal isShow={show1} onClose={() => setShow1(false)} variant={"effect-1"}>
                <div>
                    SISKA EFFECT 1
                </div>
            </ContainerModal>

            <ContainerModal isShow={show2} onClose={() => setShow2(false)} variant={"effect-2"}>
                <div>
                    SISKA EFFECT 2
                </div>
            </ContainerModal>

            <ContainerModal isShow={show3} onClose={() => setShow3(false)} variant={"effect-3"}>
                <div>
                    SISKA EFFECT 3
                </div>
            </ContainerModal>
        </>
    )
}

export default ExampleModal