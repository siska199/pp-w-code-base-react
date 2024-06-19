import clsx from "clsx";
import { HTMLAttributes } from "react";


interface TProps extends HTMLAttributes<HTMLParagraphElement>{
    message? : string;
    variant:"error"|"success"|"warning"
}
const HelperMessage = (props:TProps) => {
    const {message,variant,className, ...attrs} = props

  return (
    message ? <p className={clsx({
      [className||""]:className,
      "text-body-small font-normal":true,
      "text-error" : variant==="error",
      "text-warning" : variant==="warning",
      "text-success" : variant==="success",
    })} {...attrs}>
      {message}
    </p> : null
  )
}

export default HelperMessage