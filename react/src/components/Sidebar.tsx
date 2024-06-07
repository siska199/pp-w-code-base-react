import { IconClose } from "@assets/icons"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"


const Sidebar = () => {
    const [topPosition, setTopPosition] = useState(0)
    const { handleToggleSidebar } = useSidebar()

    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.clientHeight)
        }

    }, [])



    return (
        <>
            <div id="container-sidebar" className="h-full" onClick={handleToggleSidebar}>
                <div id="sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={`fixed h-full left-0 transition-all  duration-500   bg-white  overflow-y-auto w-0 md:w-[20rem]`}>

                    {/* Header */}
                    <div className="p-8 w-full flex flex-col gap-4">
                        <div className="w-full flex justify-between  ">
                            <Logo />
                            <IconClose id="icon-close" onClick={handleToggleSidebar} className="hidden  cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`} ></div>
        </>
    )



}



// const listGroupMenu = [
//     {
//         id: 0,
//         name: 'Getting Started',
//         childs: [
//             {
//                 id: 0,
//                 name: 'introduction',
//                 url: '/'
//             },
//             {
//                 id: 0,
//                 name: 'Instala',
//                 url: '/'
//             }
//         ]
//     },
//     {
//         id: 1,
//         name: 'Components',
//         childs: [
//             {

//             }
//         ]
//     }
// ]
export default Sidebar