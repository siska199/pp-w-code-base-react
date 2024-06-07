import Navbar from "@components/Navbar"
import Sidebar from "@components/Sidebar"
import { useEffect, useState } from "react"

interface TProps {
    children: React.ReactNode
}

const LayoutType1 = (props: TProps) => {
    const { children } = props
    const [leftPosition, setLeftPosition] = useState(0)

    useEffect(() => {

        const navbarComp = document.getElementById("sidebar")
        if (navbarComp) {
            setLeftPosition(navbarComp?.offsetWidth)
        }
        
        // Set left position of page every media query change from > md to <md
        const mediaQueryMinMd = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = () => {
            const navbarComp = document.getElementById("sidebar")
            if (navbarComp) {
                setLeftPosition(navbarComp?.offsetWidth)
            }
        }
        mediaQueryMinMd.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQueryMinMd.removeEventListener('change', handleMediaQueryChange);
        };
    }, [])

    return (
        <main id="layout" className="border-[2px] relative border-success h-screen min-h-screen w-full overflow-y-auto">
            <Navbar />
            <div className="flex border relative">
                <Sidebar />
                <div
                    className="w-full "
                    style={{
                        marginLeft: leftPosition
                    }}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default LayoutType1