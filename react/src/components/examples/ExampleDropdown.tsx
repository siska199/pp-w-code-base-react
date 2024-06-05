import DropdownBase from "@components/ui/dropdown/DropdownBase"
import DropdownFloating from "@components/ui/Accordion"
import { TOption } from "@types"

const ExampleDropdown = () => {
    const handleOnClick = (data: TOption) => {
        // console.log("name: ", data)
    }
    return (
        <>

            <h5>Input Dropdown</h5>
            <div className="ml-[1rem]  flex-col flex gap-4">
                <DropdownBase label={"Options"} onClick={handleOnClick} options={[{ label: "Siska 1", value: "Siska" }, { label: "Siska 2", value: "Siska" }, { label: "Siska 3", value: "Siska" }]} />
                <DropdownBase isDefaultStyle={false} label={"Options"} onClick={handleOnClick} options={[{ label: "Siska 1", value: "Siska" }, { label: "Siska 2", value: "Siska" }, { label: "Siska 3", value: "Siska" }]} />
                <DropdownFloating options={[{ label: "Siska 1", value: "Siska" }, { label: "Siska 2", value: "Siska" }, { label: "Siska 3", value: "Siska" }]}/>
            </div>
        </>
    )
}

export default ExampleDropdown