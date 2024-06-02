/* eslint-disable react/jsx-handler-names */
import Button from "@components/ui/Button"
import ModalConfirmation from "@components/ui/modal/ModalConfirmation"
import { useState } from "react"


const ExampleModal = () => {
    const [show1, setShow1] = useState(false)
    return (
        <div>
            <Button onClick={() => setShow1(true)}>Show modal 1</Button>
            <ModalConfirmation title={"SISKA"} isShow={show1} onClose={()=>setShow1(false)}>
                SISKA
            </ModalConfirmation>
        </div>
    )
}

export default ExampleModal