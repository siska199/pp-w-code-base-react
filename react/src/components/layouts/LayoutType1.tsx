import Navbar from "@components/Navbar"
import Sidebar from "@components/Sidebar"
import { useEffect, useState } from "react"

interface TProps {
    children: React.ReactNode
}

const LayoutType1 = (props: TProps) => {
    const { children } = props
    const [widthSidebar, setWidthSidebar] = useState(0)
    const [leftPosition, setLeftPosition] = useState(0)

    useEffect(() => {
        const sidebarComp = document.getElementById("sidebar")
        if (sidebarComp) {
            setWidthSidebar(sidebarComp?.offsetWidth)
            setLeftPosition(sidebarComp?.offsetWidth)
        }
    }, [])

    useEffect(() => {
        // Set left position of page every media query change from > md to <md
        const mediaQueryMinMd = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = () => {
            const isMinMd = mediaQueryMinMd?.matches
            console.log('width sidebar; ', document.getElementById("sidebar")?.offsetWidth)
            console.log('isMinMd: ', isMinMd)
            setLeftPosition(isMinMd ? widthSidebar : 0)

        }
        mediaQueryMinMd.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQueryMinMd.removeEventListener('change', handleMediaQueryChange);
        };
    }, [widthSidebar])

    return (
        <main id="layout" className=" overflow-x-hidden relative h-screen min-h-screen w-full overflow-y-auto">
            <Navbar />
            <div className="flex relative overflow-x-hidden">
                <Sidebar />
                <div
                    className="transistion-all duration-300 p-8"
                    style={{
                        marginLeft: leftPosition,
                        width: `calc(100% - ${leftPosition}px)`,
                    }}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default LayoutType1