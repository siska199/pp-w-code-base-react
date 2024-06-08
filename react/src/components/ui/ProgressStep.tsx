import { IconExclude } from "@assets/icons";

type TProps = {
    activeStep?: number;
    listStep: {
        title: string;
        caption?: string | React.ReactNode;
    }[];
    variant?: "horizontal" | "vertical";
    type?: "number" | "default"
}



const ProgressStep = (props: TProps) => {
    const { listStep, activeStep, variant = "horizontal", type = "default" } = props
    return (
        <ul className={`stepper-wrapper w-full ${variant === "vertical" && "vertical flex justify-start items-start flex-col"}`}>
            {
                listStep?.map((data, i) => {
                    // eslint-disable-next-line no-nested-ternary
                    const isCompleted = activeStep ? variant === "vertical" ? activeStep < i : activeStep > i : false
                    const isActive = activeStep === i
                    return (
                        <li key={i} className={`stepper-item w-full ${variant} ${isActive && "active"} ${isCompleted && "completed"}`}>
                            <div className="">
                                <div className={`step-counter ${variant} ${type === "number" && "!bg-primary-100 !border-[1px] !border-primary-500 font-bold"}`}>
                                    {
                                        isCompleted ? <IconExclude /> : <span>{type === "number" && i + 1}</span>
                                    }
                                </div>
                            </div>
                            {
                                variant === "horizontal" ? <div className={`step-name ${variant}`}>{data?.title}</div> : <div className="min-h-[5rem]">
                                    <div className="step-title text-gray">{data?.title}</div>
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