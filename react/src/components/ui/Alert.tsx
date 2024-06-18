/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconClose, IconDanger, IconInfo, IconNotification, IconSuccess } from "@assets/icons"
import variant, { variantAlertError, variantAlertSuccess, variantAlertWarning } from "@lib/utils/variants/variant-color"
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLProps, useEffect } from "react"
import variantsAlert from "@lib/utils/variants/ui/variant-alert"


interface TPropsVariantError extends VariantProps<typeof alertVariantError> {
    type: 'error'
}
interface TPropsVariantWarning extends VariantProps<typeof alertVariantWarning> {
    type: 'warning'
}

interface TPropsVariantSuccess extends VariantProps<typeof alertVariantSuccess> {
    type: 'success'
}

interface TPropsVariantGeneral extends VariantProps<typeof alertVariantGeneral> {
    type: 'notification' | 'info'
}

type TProps = HTMLProps<HTMLButtonElement> & {
    position?: "top-left" | "top-right" | 'bottom-left' | "bottom-right";
    timeout?: number;
    onDismiss?: () => void;
    show: boolean;
    autoClose?: boolean;
    isFixed?: boolean;
    withIcon?: boolean;
    withCloseBtn?: boolean;
    message: string | React.ReactNode;
    customeIcon?: React.ReactNode;
} & (TPropsVariantError | TPropsVariantWarning | TPropsVariantSuccess | TPropsVariantGeneral)



const Alert = (props: TProps) => {
    const { variant, customeIcon, type='info', withIcon, show, message, isFixed = true, withCloseBtn = false, autoClose = true, className = '', position = "top-right", timeout = 3000, onDismiss: handleOnDismiss } = props

    useEffect(() => {
        if (timeout > 0 && handleOnDismiss && autoClose && show) {
            const timer = setTimeout(() => {
                handleOnDismiss();
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [handleOnDismiss, timeout, autoClose, show]);

    const getAlertVariant = () => {
        switch (type) {
            case 'error':
                return alertVariantError;
            case 'success':
                return alertVariantSuccess;
            case 'warning':
                return alertVariantWarning;
            case 'notification':
            case 'info':
                return alertVariantGeneral
            default:
                return alertVariantError; // Default to error variant if type is not specified or unrecognized
        }
    };

    const paramsAlertVariant = { className, variant, position, isFixed }
    const alertVariant = getAlertVariant()
    return show ? (
        // @ts-expect-error
        <div className={cn(alertVariant(paramsAlertVariant))}>
            <div className={cn({
                "flex gap-3 w-full relative": true,
                "pr-4": withCloseBtn,
            })}>
                {
                    withCloseBtn && <IconClose onClick={handleOnDismiss} className={cn({
                        "top-1 right-0 absolute w-[0.75rem] h-[0.75rem] cursor-pointer-custome": true,
                        "icon-warning": type === "warning",
                        "icon-error": type === "error",
                        "icon-success": type === "success"
                    })} />
                }

                {
                    withIcon && <span className="mt-1">
                        {
                            customeIcon ?? <>
                                {type === "info" && <IconInfo className="icon-gray" />}
                                {type === "warning" && <IconInfo className="icon-warning" />}
                                {type === "error" && <IconDanger className="icon-error" />}
                                {type === "success" && <IconSuccess className="icon-success" />}
                                {type === "notification" && <IconNotification />}
                            </>
                        }


                    </span>
                }
                {message}
            </div>
        </div>
    ) : null
}


const generalStyle = 'flex gap-3 px-3 py-2 border w-fit rounded-md'



const alertVariantError = cva(generalStyle, {
    variants: {
        ...variantsAlert,
        variant: {
            ...variantAlertError
        },
    },
    defaultVariants: {
        variant: "error-soft"
    }
})

const alertVariantSuccess = cva(generalStyle, {
    variants: {
        ...variantsAlert,
        variant: {
            ...variantAlertSuccess
        },
    },
    defaultVariants: {
        variant: "success-soft"
    }
})

const alertVariantWarning = cva(generalStyle, {
    variants: {
        ...variantsAlert,
        variant: {
            ...variantAlertWarning
        },
    },
    defaultVariants: {
        variant: "warning-soft"
    }
})

const alertVariantGeneral = cva(generalStyle, {
    variants: {
        ...variantsAlert,
        variant: {
            ...variant
        },
    },
    defaultVariants: {
        variant: "solid-white"
    }
})

export default Alert