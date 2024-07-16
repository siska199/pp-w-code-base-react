import { IconCalender } from "@assets/icons";
import { cn } from "@lib/utils/helper";

interface TProps {
    variant?: "v1" | "v2"
    listStep: {
        title?: string | React.ReactNode;
        subtitle?: string | React.ReactNode;
        description?: string | React.ReactNode;
    }[];
    customeClass?: {
        container?: string;
        containerStep?: string;
        containerContent?: string;
        containerIcon?: string;
        lineBorder?: string;
    };
    customeIcon?: React.ReactNode;
}

const Timeline = (props: TProps) => {
    const { listStep, variant = "v1", customeClass, customeIcon } = props

    const Content = (data: TProps["listStep"][0], i: number, position: "left" | "right") => (
        <div className={cn({
            'w-[20rem] mb-8 "opacity-0"}': true,
            "hidden md:block": (position === "left") && variant === "v1",
            'md:opacity-0': ((i % 2 == 0 && position === "right") || (i % 2 !== 0 && position === "left")) && variant === "v1",
            [customeClass?.containerContent || '']: customeClass?.containerContent
        })}>
            {
                variant === "v1" && <p className="text-body-small">{data?.subtitle}</p>
            }
            <p className="text-body-medium text-wrap text-black font-medium">{data.title}</p>
            <p className="mt-2">{data?.description}</p>
        </div>

    )
    return (
        <div className={`w-fit h-full ${customeClass?.container}`}>
            {
                listStep?.map((data, i) => (
                    <div key={i} className={`flex gap-8 ${customeClass?.containerStep}`}>

                        {variant === "v1" && Content(data, i, "left")}
                        {variant === "v2" && <p className="text-body-small font-medium">{data?.subtitle}</p>}

                        <div className={` table-cell w-[1px] border-primary-100 border items-stretch relative ${customeClass?.lineBorder}`}>
                            <div className={`${customeClass?.containerIcon} p-2 flex items-center justify-center  right-1/2 transform translate-x-1/2  bg-primary-500 rounded-full  absolute`}>
                                {
                                    customeIcon ?? <IconCalender className="text-white " />
                                }
                            </div>
                        </div>

                        {Content(data, i, "right")}
                    </div>
                ))
            }
        </div>
    )
}

export default Timeline