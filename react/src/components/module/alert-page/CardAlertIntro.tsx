
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Alert from "@components/ui/Alert";
import Button from "@components/ui/Button";
import { useState } from "react";

const CardAlertIntro = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert)
  }

  const listExample = [
    {
      title: 'Show alert after click Button:',
      component: <>
        <Button variant={"white"} onClick={() => handleToggleAlert()} >Show Alert</Button>
        <Alert variant="success" withCloseBtn show={showAlert} onDismiss={handleToggleAlert}>
          mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
      </>
    },
    {
      title: 'Example variant:',
      component: <>
        <Alert variant="notification" withCloseBtn={true} isFixed={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="info" isFixed={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="warning" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="error" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="success" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
      </>
    }
  ]
  return (
    <CardIntroComponent
      title={'Alert'}
      subTitle="The Alert component is a UI element commonly used in web applications to display important information, warnings, or notifications to users. It typically appears as a message box or dialog that pops up on the screen, drawing the user's attention to a specific event or situation that requires their attention."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}



const displayCodeBase = `import { IconClose, IconDanger, IconInfo, IconNotification, IconSuccess } from "@assets/icons"
import { cn } from "@lib/utils/helper"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLProps, useEffect } from "react"

interface TProps extends HTMLProps<HTMLButtonElement>, VariantProps<typeof alertVariants> {
    variant: 'info' | 'warning' | 'error' | 'success' | 'notification'
    withCloseBtn?: boolean;
    position?: "top-left" | "top-right";
    timeout?: number;
    onDismiss?: () => void;
    show: boolean;
    autoClose?: boolean;
    isFixed?: boolean;
}

const Alert = (props: TProps) => {
    const { variant, show, children, isFixed = true, withCloseBtn = false, autoClose = true, className, position = "top-right", timeout = 3000, onDismiss: handleOnDismiss } = props

    useEffect(() => {
        if (timeout > 0 && handleOnDismiss && autoClose) {
            const timer = setTimeout(() => {
                handleOnDismiss();
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [handleOnDismiss, timeout, autoClose]);

    return show ? (

        <div className={cn(alertVariants({ className, variant, position, isFixed }))}>
            <div className={cn({
                "flex gap-3 w-full relative": true,
                "pr-4": withCloseBtn,
            })}>
                {
                    withCloseBtn && <IconClose onClick={handleOnDismiss} className={cn({
                        "top-1 right-0 absolute w-[0.75rem] h-[0.75rem] cursor-pointer-custome": true,
                        "icon-warning": variant === "warning",
                        "icon-error": variant === "error",
                        "icon-success": variant === "success"
                    })} />
                }

                <span className="mt-1">
                    {variant === "info" && <IconInfo className="icon-gray" />}
                    {variant === "warning" && <IconDanger className="icon-wrning" />}
                    {variant === "error" && <IconInfo className="icon-error" />}
                    {variant === "success" && <IconSuccess className="icon-success" />}
                    {variant === "notification" && <IconNotification />}

                </span>
                {children}
            </div>
        </div>
    ) : null
}

const alertVariants = cva(
    'flex gap-3 px-3 py-2 border w-fit rounded-md  ',
    {
        variants: {
            variant: {
                'info': 'bg-gray-50',
                'warning': 'bg-warning-50 text-warning-900',
                'error': 'bg-error-50  text-error-900',
                'success': 'bg-success-50  text-success-900',
                "notification": "bg-white "
            },
            position: {
                'top-left': 'top-6 left-6',
                "top-right": "top-6 right-6"
            },
            isFixed: {
                "true": "fixed z-[9] !max-w-[17rem] !w-[17rem]",
                "false": "static  w-[23rem] max-w-[23rem] "
            }
        },
        compoundVariants: [

        ],
        defaultVariants: {

        }
    }
)


export default Alert`;

export default CardAlertIntro;
