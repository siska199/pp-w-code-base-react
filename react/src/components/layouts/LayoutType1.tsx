import Navbar from "@components/Navbar"
import RightSidebar from "@components/RightSidebar"
import Sidebar from "@components/Sidebar"
import useMenu from "@hooks/useMenu"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"



const LayoutType1 = () => {
    const { showSidebar, showRightSidebar } = useMenu()

    const [widthSidebar, setWidthSidebar] = useState(0)
    const [widthRightSidebar, setWidthRightSidebar] = useState(0)
    const [leftPosition, setLeftPosition] = useState(0)
    const [rightPosition, setRightPosition] = useState(0)
    const [isRender, setIsrender] = useState(false)

    useEffect(() => {
        const sidebarComp = document.getElementById("sidebar") as HTMLDivElement
        const rightsSidebarComp = document.getElementById("right-sidebar") as HTMLDivElement

        if (sidebarComp) {
            setWidthSidebar(sidebarComp?.offsetWidth)
            setLeftPosition(sidebarComp?.offsetWidth)
            setWidthRightSidebar(rightsSidebarComp?.offsetWidth)
            setRightPosition(rightsSidebarComp?.offsetWidth)
        }

        if (showSidebar === false) {
            sessionStorage?.removeItem('setting')
        }
        setIsrender(!isRender)
    }, [showSidebar])

    useEffect(() => {
        // Set left position of page every media query change from > md to <md
        const mediaQueryMinLg = window.matchMedia('(min-width: 1024px)');
        const mediaQueryMinMd = window.matchMedia('(min-width: 768px)');

        const handleMediaQueryChange = () => {
            const isMinLg = mediaQueryMinLg?.matches
            const isMinMd = mediaQueryMinMd?.matches

            setRightPosition(isMinLg ? widthRightSidebar : 0)
            setLeftPosition(isMinMd ? widthSidebar : 0)
            setIsrender(!isRender)
        }


        mediaQueryMinLg.addEventListener('change', handleMediaQueryChange);
        mediaQueryMinMd.addEventListener('change', handleMediaQueryChange);
        window.addEventListener('resize', handleMediaQueryChange);

        return () => {
            mediaQueryMinLg.removeEventListener('change', handleMediaQueryChange);
            mediaQueryMinMd.removeEventListener('change', handleMediaQueryChange);
            window.removeEventListener('resize', handleMediaQueryChange);

        };

    }, [widthSidebar, widthRightSidebar, showSidebar])

    return (
        <main id="layout" className=" overflow-x-hidden relative bg-white h-screen min-h-screen w-full overflow-y-auto">
            <Navbar />
            <div className="flex relative overflow-x-hidden ">
                <Sidebar />
                <div
                    className=" p-8 flex  transtion-all duration-10 overflow-x-auto"
                    style={{
                        marginLeft: showSidebar === false ? 0 : leftPosition,
                        marginRight: showRightSidebar === false ? 0 : rightPosition,
                        width: showSidebar === false && showRightSidebar === false ? '100%' : `calc(100% - ${(showSidebar === false ? 0 : leftPosition) + (showRightSidebar === false ? 0 : rightPosition)}px)`,
                    }}>
                    <div className="w-full max-w-full flex flex-col gap-10 ">
                        <Outlet />
                    </div>
                    {showSidebar !== false && <RightSidebar />}
                </div>
            </div>
        </main>
    )
}

export default LayoutType1