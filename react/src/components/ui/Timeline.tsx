import { IconCalender } from "@assets/icons";

interface TProps {
    listStep: {
        title?: string | React.ReactNode;
        subtitle?: string | React.ReactNode;
        description?: string | React.ReactNode;
    }[];
}

const Timeline = (props: TProps) => {
    const { listStep } = props

    const Content = (data: TProps["listStep"][0], i: number, position: "left" | "right") => (
        <div className={`w-[20rem] mb-8 ${((i % 2 == 0 && position === "right") || (i % 2 !== 0 && position === "left")) && "opacity-0"}`}>
            <p className="text-body-small">{data?.subtitle}</p>
            <p className="text-body-medium text-wrap text-black font-medium">{data.title}</p>
            <p className="mt-2">{data?.description}</p>
        </div>

    )
    return (
        <div className="w-fit h-full">
            {
                listStep?.map((data, i) => (
                    <div key={i} className="flex gap-8 ">

                        {Content(data, i, "left")}


                        <div className=" table-cell w-[1px] border-primary-100 border items-stretch relative">
                            <div className=" p-2 flex items-center justify-center  right-1/2 transform translate-x-1/2  bg-primary-500 rounded-full border-4 absolute border-white">
                                <IconCalender className="text-white " />
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