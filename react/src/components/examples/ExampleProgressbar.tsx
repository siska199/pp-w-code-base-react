import ProgressStep from "@components/ui/ProgressStep"
import Progressbar from "@components/ui/Progressbar"

const ExampleProgressbar = () => {
    const activeIndexStep = 1
    const listStepHorizontal = [
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        },
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        },
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        },
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        },
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        },
        {
            title: "Get Started",
            caption: "Let us know little bit more about what you do."
        }
    ]

    const listStepVertical = [
        {
            title: "Get Started",
            caption:<div className="h-[10rem] w-full  border">

            </div>
        },
        {
            title: "Get Started",
            caption:<div className="h-[10rem]  w-full border">

            </div>
        },
        {
            title: "Get Started",
            caption: <div className="h-[10rem] w-full border">

            </div>
        },
        {
            title: "Get Started",
            caption: <div className="h-[10rem] w-full border">

            </div>
        },
        {
            title: "Get Started",
            caption: <div className="h-[10rem] w-full border">

            </div>
        },
        {
            title: "Get Started",
            caption: <div className="h-[10rem] w-full border">

            </div>
        }
    ]

    return (
        <div className="w-full  p-[5rem] flex flex-col gap-4 border">
            <Progressbar value={50} valueTotal={100} size="small" />
            <Progressbar value={50} valueTotal={100} />
            <ProgressStep activeStep={activeIndexStep} listStep={listStepHorizontal} />
            <ProgressStep activeStep={activeIndexStep} listStep={listStepVertical} variant="vertical" />
        </div>
    )
}

export default ExampleProgressbar