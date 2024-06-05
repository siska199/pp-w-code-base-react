import Tooltip from "@components/ui/Tooltip"



const ExampleTooltip = () => {
    return (
        <div className="py-4 px-[5rem] flex gap-4 flex-col">
            <Tooltip text={"Tooltip text"}>
                Hover me SISKA APRIANA RIFIANTI
            </Tooltip>
            <Tooltip text={"Tooltip text kokok melon"} variant="bottom">
                Hover me
            </Tooltip>
            <div className="w-full gap-4 flex">

            <Tooltip text={"Tooltip text kokok melon"} variant="left">
                Hover me wkwkkwkwkk awokwoysuisfyuetfuy
            </Tooltip>
            <Tooltip text={"Tooltip text kokok melon"} variant="right">
                Hover me wkwkkwkwkk awokwoysuisfyuetfuy
            </Tooltip>
            </div>
        </div>
    )
}

export default ExampleTooltip