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
        </div>
    )
}

export default ExampleTooltip