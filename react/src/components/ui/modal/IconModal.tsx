import { IconZoom } from '@assets/icons'
import ContainerModal from '@components/ui/modal/ContainerModal'
import React, { useState } from 'react'

interface TProps {
    content: React.ReactNode;
}

const IconModal = (props: TProps) => {
    const { content } = props
    const [showModal, setShowModal] = useState(false)

    const handleToggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <IconZoom onClick={handleToggleModal} />
            <ContainerModal isShow={showModal} onClose={handleToggleModal}>
                {content}
            </ContainerModal>
        </div>
    )
}

export default IconModal