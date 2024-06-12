import { IconClose } from "@assets/icons"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import { listFlattenMenuSidebar, listGroupingMenuSidebar } from "@lib/utils/data/menu-sidebar"
import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"
import NestedMenu, { TMenuSettings, TParamsOnChangeMenu } from "./ui/NestedMenu"

interface TProps {
    isLandingPage: boolean;
    idActiveMenu?: string;
}

const Sidebar = (props: TProps) => {
    const { isLandingPage, idActiveMenu } = props
    const { handleToggleSidebar } = useSidebar();

    const [topPosition, setTopPosition] = useState(0);
    const [setting, setSetting] = useState<TMenuSettings>({
        "0": {
            customeClass: {
                label: "text-black font-medium"
            },
            defaultOpen: true
        },
        "1": {
            defaultOpen: false
        },
        activeMenu: {
            id: "",
            level: -1,
            name: "",
            parentId: ""
        },
        openMenus: {
            "0-GS0": true,
            "0-C0": true,
        }
    })


    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.clientHeight)
        }

        const settingSession = sessionStorage?.getItem('setting')
        if (settingSession) {
            const initialSetting = JSON.parse(sessionStorage?.getItem('setting') || "")
            setSetting(initialSetting)
        }
    }, [])

    useEffect(() => {
        if (idActiveMenu) {
            const activeMenu = listFlattenMenuSidebar?.filter((data) => data?.id === idActiveMenu)[0]
            setSetting({
                ...setting,
                activeMenu
            })
        }
    }, [idActiveMenu, location.pathname])

    const handleChangeActiveMenu = (data: TParamsOnChangeMenu) => {
        setSetting({
            ...setting,
            activeMenu: {
                ...setting?.activeMenu,
                level: data?.level,
                name: data?.groupMenu?.name,
                parentId: data?.parentId
            }
        })
    }

    return (
        <>
            <div id="container-sidebar" className=" h-full " onClick={handleToggleSidebar}>
                <div id="sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={`fixed overflow-y-hidden  h-[calc(100%-3rem)] left-0   bg-white   w-0 ${!isLandingPage && "md:w-[17rem]"} `}>

                    <div className="p-8 w-full  flex flex-col gap-4 relative  h-full">
                        <div id="icon-close" className="hidden justify-between absolute top-6 right-6 cursor-pointer ml-auto">
                            <Logo sizeLogo={"base"} />
                            <IconClose onClick={handleToggleSidebar} className="ml-auto" />
                        </div>
                        <NestedMenu
                            setting={setting}
                            setSetting={setSetting}
                            menu={listGroupingMenuSidebar}
                            onChangeMenu={handleChangeActiveMenu}
                        />
                    </div>
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`} ></div>
        </>
    )



}



export default Sidebar