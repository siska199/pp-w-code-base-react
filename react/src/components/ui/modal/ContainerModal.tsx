import { TBaseModal } from '@/types/ui/index';
import { IconClose } from "@assets/icons";
import "@assets/styles/ui/modal.css";
import Button from "@components/ui/Button";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

interface TProps extends TBaseModal, VariantProps<typeof modalVariants> {
    
}


const ContainerModal = (props: TProps) => {
    const { isShow, onClose: handleOnClose, children, variant = "effect-1" } = props

    const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <>
            <div
                className={cn(modalVariants({
                    variant,
                    className: clsx({
                        "md-modal": true,
                        "md-show": isShow,
                    })
                }))}
            >
                <div className="md-content relative min-h-[10rem flex flex-col gap-2" onClick={handleStopPropagation}>
                    <Button className="absolute top-2 right-3 rounded-full w-[2rem] h-[2rem]" variant={"icon"} onClick={handleOnClose}>
                        <IconClose />
                    </Button>
                    {children}
                </div>
            </div >

            <div className={`${isShow ? "md-show" : ""} md-overlay min-h-screeen`}></div>
        </>
    )
}


const modalVariants = cva(
    ' min-w-full p-4 md:min-w-[20rem] ',
    {
        variants: {
            variant: {
                "effect-1": "md-effect-1"
            },

        },

    }
)
export default ContainerModal