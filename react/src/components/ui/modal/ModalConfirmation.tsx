import { TBaseModal } from '@/types/ui/index';
import Button from '@components/ui/Button';
import ContainerModal from '@components/ui/modal/ContainerModal';

interface TProps extends TBaseModal {
    title?: string;
    button?: {
        cancel: {
            name?: string;
            onClick: () => void;
        },
        confirm: {
            name?: string;
            onClick: () => void;
        }
    }
}

const ModalConfirmation = (props: TProps) => {
    const { title, isShow, children, onClose: handleOnClose, button } = props;

    const handleConfirmationBtn = () => {
        button?.confirm.onClick && button?.confirm?.onClick()
    }
    return (
        <ContainerModal isShow={isShow} onClose={handleOnClose}>

            {
                title && <div className="md-header">
                    <p className="md-title font-bold text-body-large">{title}</p>
                </div>
            }

            <div className="md-body">{children}</div>
            <div className="md-footer mb-auto justify-end flex gap-2 ">
                <Button className='min-w-[5rem]' variant={"white"} onClick={handleOnClose}>{button?.cancel?.name || "Cancel"}</Button>
                <Button className='min-w-[5rem]' onClick={handleConfirmationBtn}>{button?.confirm?.name || "Confirm"}</Button>
            </div>
        </ContainerModal>
    )
}

export default ModalConfirmation