import { HTMLAttributes } from "react";


interface TProps extends HTMLAttributes<HTMLParagraphElement>{
    message? : string;
}
const ErrorMessage = (props:TProps) => {
    const {message,className, ...attrs} = props

  return (
    message ? <p className={`${className} text-error text-body-small`} {...attrs}>{message}</p>: null
  )
}

export default ErrorMessage