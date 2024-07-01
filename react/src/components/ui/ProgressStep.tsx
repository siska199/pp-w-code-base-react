import { cn } from "@lib/utils/helper";

type TProps = {
    activeStep?: number;
    listStep: {
        title: string | React.ReactNode;
        caption?: string | React.ReactNode;
    }[];
    variant?: "horizontal" | "vertical";
    type?: "number" | "default" | "timeline";
    shapeItem?: "rounded" | "circle"
}



const ProgressStep = (props: TProps) => {
    const { listStep, shapeItem = "circle", activeStep, variant = "horizontal", type = "default" } = props

    const IconCheckPS = (props: any) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
        <path fillRule="evenodd" clipRule="evenodd" d="M3.77479 7.96683L10.3748 1.2446C11.0415 0.566826 12.0526 1.35572 11.2192 2.2446C11.2192 2.2446 4.8859 10.2002 4.55257 10.6557C4.45292 10.8165 4.31387 10.9492 4.14859 11.0412C3.98332 11.1332 3.79729 11.1815 3.60812 11.1815C3.41896 11.1815 3.23293 11.1332 3.06765 11.0412C2.90237 10.9492 2.76333 10.8165 2.66368 10.6557L0.585899 7.10016C0.480309 6.90724 0.447141 6.68293 0.492376 6.46771C0.537611 6.25248 0.65827 6.06051 0.83259 5.92641C1.00691 5.79232 1.22341 5.72494 1.44304 5.73643C1.66267 5.74791 1.87096 5.83751 2.03034 5.98905L3.77479 7.96683Z" fill="white" />
    </svg>

    return (
        <ul className={`stepper-wrapper w-full ${variant === "vertical" && "vertical flex justify-start items-start flex-col"}`}>
            {
                listStep?.map((data, i) => {
                    // eslint-disable-next-line no-nested-ternary
                    const isCompleted = activeStep ? variant === "vertical" ? activeStep < i : activeStep > i : false
                    const isActive = activeStep === i
                    return (
                        <li key={i} className={`stepper-item w-full ${type} ${variant} ${isActive && "active"} ${isCompleted && "completed"}`}>
                            <div className="">
                                <div className={cn({
                                    [`step-counter ${variant} w-[2rem] relative z-[5] flex items-center justify-center  bg-white py-3`]: true,
                                    'h-[1rem]': type === "timeline"
                                })}>
                                    <span className={cn({
                                        "flex justify-center items-center rounded-sm": true,
                                        "rounded-full": shapeItem === "circle",
                                        'bg-primary p-1 text-white border-primary': isCompleted,
                                        "border-primary  bg-white border-[2px] ring-4 ring-primary-200": isActive,
                                        "!w-3 !h-3":isActive && type === "default",
                                        "border-[2px]":type === "default" && !isCompleted && !isActive,
                                        'w-[1.5rem] h-[1.5rem] !text-body-small !bg-primary-100 !border-[1px] !border-primary-100  font-medium text-primary-700 ': type === "number",
                                        "!w-3 !h-3 !bg-primary-100": type === "timeline",
                                        'w-4 h-4': type === "default",
                                    })}>

                                        {
                                            isCompleted && <IconCheckPS />
                                        }
                                        {
                                            type === "number" && i + 1
                                        }
                                        {
                                            type === "timeline" && ""
                                        }
                                    </span>

                                </div>
                            </div>
                            {
                                variant === "horizontal" ? <div className={`step-name ${variant}`}>{data?.title}</div> : <div className="min-h-[1rem]">
                                    <div className={cn({
                                        'step-title text-gray ': true,
                                        'mt-2': ["number", "default"]?.includes(type)
                                    })}>{data?.title}</div>
                                    <div className="step-caption font-normal text-gray-500 mt-2 mb-8 flex flex-col gap-4">{data?.caption}</div>
                                </div>
                            }
                        </li>
                    )
                }

                )
            }
        </ul>
    )
}





export default ProgressStep