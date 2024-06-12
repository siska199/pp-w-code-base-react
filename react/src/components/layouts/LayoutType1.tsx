import Navbar from "@components/Navbar"
import RightSidebar from "@components/RightSidebar"
import Sidebar from "@components/Sidebar"
import { useEffect, useState } from "react"
import { Outlet, useMatches, useNavigation } from "react-router-dom"



const LayoutType1 = () => {

    const navigation = useNavigation();

    console.log("navigate: ", navigation?.state)

    const matches = useMatches()
    const pagesMatch = matches?.filter(page => page.pathname === location.pathname)
    const currentPageData: any = pagesMatch?.[pagesMatch?.length - 1]?.handle

    const [widthSidebar, setWidthSidebar] = useState(0)
    const [widthRightSidebar, setWidthRightSidebar] = useState(0)
    const [leftPosition, setLeftPosition] = useState(0)
    const [rightPosition, setRightPosition] = useState(0)

    useEffect(() => {
        const sidebarComp = document.getElementById("sidebar") as HTMLDivElement
        const rightsSidebarComp = document.getElementById("right-sidebar") as HTMLDivElement

        if (sidebarComp) {
            setWidthSidebar(sidebarComp?.offsetWidth)
            setLeftPosition(sidebarComp?.offsetWidth)
            setWidthRightSidebar(rightsSidebarComp?.offsetWidth)
            setRightPosition(rightsSidebarComp?.offsetWidth)
        }
    }, [currentPageData])

    useEffect(() => {
        // Set left position of page every media query change from > md to <md
        const mediaQueryMinMd = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = () => {
            const isMinMd = mediaQueryMinMd?.matches
            setLeftPosition(isMinMd ? widthSidebar : 0)
            setRightPosition(isMinMd ? widthRightSidebar : 0)

        }
        mediaQueryMinMd.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQueryMinMd.removeEventListener('change', handleMediaQueryChange);
        };
    }, [widthSidebar, widthRightSidebar, currentPageData])

    return (
        <main id="layout" className=" overflow-x-hidden relative h-screen min-h-screen w-full overflow-y-auto">
            {
                navigation?.state === "loading" && <div>Loading</div>
            }
            <Navbar />
            <div className="flex relative overflow-x-hidden">
                <Sidebar isLandingPage={currentPageData?.isLandingPage} />
                <div
                    className=" p-8 flex  transtion-all duration-500"
                    style={{
                        marginLeft: currentPageData?.isLandingPage ? 0 : leftPosition,
                        marginRight: currentPageData?.isLandingPage ? 0 : rightPosition,
                        width: currentPageData?.isLandingPage ? '100%' : `calc(100% - ${leftPosition + rightPosition}px)`,
                    }}>
                    <div className="w-full max-w-full flex flex-col gap-10">
                        <Outlet />
                    </div>
                    {!currentPageData?.isLandingPage && <RightSidebar />}
                </div>
            </div>
        </main>
    )
}

export default LayoutType1