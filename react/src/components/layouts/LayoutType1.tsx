import Navbar from "@components/Navbar"
import RightSidebar from "@components/RightSidebar"
import Sidebar from "@components/Sidebar"
import { useEffect, useState } from "react"

interface TProps {
    children: React.ReactNode
}

const LayoutType1 = (props: TProps) => {
    const { children } = props
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
    }, [])

    useEffect(() => {
        // Set left position of page every media query change from > md to <md
        const mediaQueryMinMd = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = () => {
            const isMinMd = mediaQueryMinMd?.matches
            console.log("is detected: ", isMinMd)
            setLeftPosition(isMinMd ? widthSidebar : 0)
            setRightPosition(isMinMd ? widthRightSidebar : 0)

        }
        mediaQueryMinMd.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQueryMinMd.removeEventListener('change', handleMediaQueryChange);
        };
    }, [widthSidebar, widthRightSidebar])

    return (
        <main id="layout" className=" overflow-x-hidden relative h-screen min-h-screen w-full overflow-y-auto">
            <Navbar />
            <div className="flex relative overflow-x-hidden">
                <Sidebar />
                <div
                    className=" p-8 flex min-h-screen "
                    style={{
                        marginLeft: leftPosition,
                        marginRight: rightPosition,
                        width: `calc(100% - ${leftPosition + rightPosition}px)`,
                    }}>
                    <div className="min-h-screen max-w-full flex flex-col gap-10">
                        {children}
                    </div>
                    <RightSidebar />
                </div>
            </div>
        </main>
    )
}

export default LayoutType1