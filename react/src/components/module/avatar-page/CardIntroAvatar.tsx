
import { IconVerified } from "@assets/icons";
import ShowVariousCompVariant from "@components/ShowVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";
import variantsAvatar from "@lib/utils/variants/ui/variant-avatar";

const CardIntroAvatar = () => {

  console.log(Object.keys(variantsAvatar.shape))
  const listExample = [
    {
      component: <ShowVariousCompVariant<typeof variantsAvatar.variant>
        variant={variantsAvatar.variant}
        groups={["solid", "outline", "soft",]}
        Component={(variant) => <Avatar type="initial-name" variant={variant} name="Siska" />}
      />
    },
    {
      title: 'Size',
      component: <ShowVariousCompVariant<typeof variantsAvatar.size>
        variant={variantsAvatar.size}
        groups={Object.keys(variantsAvatar.size)}
        Component={(size) => <Avatar type="initial-name" variant={"solid-primary"} size={size} name="Siska" />}
      />
    },
    {
      title: 'Shape',
      component: <ShowVariousCompVariant<typeof variantsAvatar.shape>
        variant={variantsAvatar.shape}
        groups={Object.keys(variantsAvatar.shape)}
        Component={(shape) => <Avatar type="initial-name" variant={"solid-primary"} shape={shape} name="Siska" />}
      />
    },
    {
      title: 'Status',
      component: <ShowVariousCompVariant<typeof variantsAvatar.status>
        variant={variantsAvatar.status}
        groups={Object.keys(variantsAvatar.status)}
        Component={(status) => {

          return <Avatar type="image" src={"https://i.pinimg.com/564x/d6/b0/b6/d6b0b67ba61773c5f163111ede88740a.jpg"} customeIcon={status === "icon" ? <IconVerified /> : undefined} status={status} name="Siska" />
        }}
      />
    }

  ]
  return (
    <CardIntroComponent
      title={'Avatar'}
      subTitle="The Avatar component is commonly used in website development to visually represent users, especially in social interactions such as forums, social media, or community-based applications. It is a small image that represents a user or another entity."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export default Alert`

export default CardIntroAvatar;
