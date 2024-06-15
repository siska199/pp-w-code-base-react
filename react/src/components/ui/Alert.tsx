/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconClose, IconDanger, IconInfo, IconNotification, IconSuccess } from "@assets/icons"
import variant, { variantAlertError, variantAlertSuccess, variantAlertWarning } from "@lib/utils/data/variant-color"
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLProps, useEffect } from "react"


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
    position?: "top-left" | "top-right";
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
    const { variant, customeIcon, type, withIcon, show, message, isFixed = true, withCloseBtn = false, autoClose = true, className = '', position = "top-right", timeout = 3000, onDismiss: handleOnDismiss } = props

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
                                {type === "warning" && <IconDanger className="icon-wrning" />}
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
const generalVarianSettingAlert = {
    position: {
        'top-left': 'top-6 left-6',
        "top-right": "top-6 right-6"
    },
    isFixed: {
        "true": "fixed z-[9] !max-w-[17rem] !w-[17rem]",
        "false": "static  w-[23rem] max-w-[23rem] "
    }
}


const alertVariantError = cva(generalStyle, {
    variants: {
        variant: {
            ...variantAlertError
        },
        ...generalVarianSettingAlert
    },
    defaultVariants: {
        variant: "soft-error"
    }
})

const alertVariantSuccess = cva(generalStyle, {
    variants: {
        variant: {
            ...variantAlertSuccess
        },
        ...generalVarianSettingAlert,
    },
    defaultVariants: {
        variant: "soft-success"
    }
})

const alertVariantWarning = cva(generalStyle, {
    variants: {
        variant: {
            ...variantAlertWarning
        },
        ...generalVarianSettingAlert,
    },
    defaultVariants: {
        variant: "soft-warning"
    }
})

const alertVariantGeneral = cva(generalStyle, {
    variants: {
        variant: {
            ...variant
        },
        ...generalVarianSettingAlert,
    },
    defaultVariants: {
        variant: "solid-white"
    }
})

export default Alert