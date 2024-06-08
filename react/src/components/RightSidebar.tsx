import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"


const RightSidebar = () => {
    const [topPosition, setTopPosition] = useState(0)

    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.clientHeight)
        }

    }, [])



    return (
        <div id="right-sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={` h-[calc(100%-3rem)  fixed right-2 bg-white  flex-shrink-0 h-full hidden md:block w-0 md:w-[20rem]`}>
            <div className="w-full flex flex-col gap-4 relative  h-full p-8">
                Right Sidebar
            </div>
        </div>
    )


}



export default RightSidebar