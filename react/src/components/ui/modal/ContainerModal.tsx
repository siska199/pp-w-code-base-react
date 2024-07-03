import { TBaseModal } from '@/types/ui/index';
import { IconClose } from "@assets/icons";
import "@assets/styles/ui/modal.css";
import Button from "@components/ui/Button";
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

interface TProps extends TBaseModal, VariantProps<typeof modalVariants> {
    customeClass?: {
        mdContent?: string;
    }
}


const ContainerModal = (props: TProps) => {
    const { isShow, customeClass, onClose: handleOnClose, children, variant = "fadein-scaleup" } = props

    const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <>
            <div
                className={cn(modalVariants({
                    variant,
                    className: clsx({
                        "md-modal ": true,
                        "md-show": isShow,
                    })
                }))}
            >
                <div 
                    className={cn({
                        'md-content bottom-0 relative min-h-[10rem] flex flex-col gap-2': true,
                        [customeClass?.mdContent || '']: customeClass?.mdContent
                    })} 
                    onClick={handleStopPropagation}
                >
                    <Button 
                        label={<IconClose />} 
                        className="absolute top-2 right-3 rounded-full w-[2rem] h-[2rem]" 
                        variant={"plain"} 
                        onClick={handleOnClose} 
                    />
                    {children}
                </div>
            </div >

            <div className={`${isShow ? "md-show" : ""} md-overlay h-screen max-h-screeen`}></div>
        </>
    )
}


const modalVariants = cva(
    ' min-w-full p-4 md:min-w-[20rem] w-full ',
    {
        variants: {
            variant: {
                "fadein-scaleup": "md-fadein-scaleup", // Fade in and scale up
                "slide-formright": "md-slide-formright", // Slide from the right 
                "drawer": "md-drawer p-0" // Drawer 
            },
        },

    }
)

export default ContainerModal