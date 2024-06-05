import { IconExclude } from "@assets/icons";

type TProps = {
    activeStep: number;
    listStep: {
        title: string;
        caption?: string;
    }[];
    variant?: "horizontal" | "vertical"

}



const ProgressStep = (props: TProps) => {
    const { listStep, activeStep, variant = "horizontal" } = props
    return (
        <ul className={`stepper-wrapper ${variant === "vertical" && "vertical flex justify-start items-start flex-col"}`}>
            {
                listStep?.map((data, i) => {
                    const isCompleted = variant === "vertical" ? activeStep < i : activeStep > i
                    const isActive = activeStep === i
                    return (
                        <li key={i} className={`stepper-item ${variant} ${isActive && "active"} ${isCompleted && "completed"}`}>
                            <div className="">
                                <div className={`step-counter ${variant}`}>
                                    {
                                        isCompleted ? <IconExclude /> : <span></span>
                                    }
                                </div>
                            </div>
                            {
                                variant === "horizontal" ? <div className={`step-name ${variant}`}>{data?.title}</div> : <div className="min-h-[5rem]">
                                    <div className="step-title">{data?.title}</div>
                                    <div className="step-caption font-normal text-gray-500">{data?.caption}</div>
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