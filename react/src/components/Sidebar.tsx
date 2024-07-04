import { IconClose } from "@assets/icons"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import useMediaQuery from "@hooks/useMediaQuery"
import useMenu from "@hooks/useMenu"
import { listFlattenMenuSidebar, listGroupingMenuSidebar } from "@lib/utils/data/menu-sidebar"
import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"
import NestedMenu, { TMenuSettings } from "./ui/NestedMenu"

const Sidebar = () => {
    const { id, showSidebar, } = useMenu()
    const { isMaxMd } = useMediaQuery();
    const { handleToggleSidebar } = useSidebar();

    const [topPosition, setTopPosition] = useState(0);
    const [setting, setSetting] = useState<TMenuSettings>({
        "0": {
            customeClass: {
                label: "text-black font-medium"
            },
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
    const [isRender, setIsrender] = useState(false)

    useEffect(() => {
        const navbarComp = document.getElementById("navbar")
        navbarComp&&setTopPosition(navbarComp?.clientHeight)

        const settingSession = sessionStorage?.getItem('setting')
        if (settingSession) {
            const initialSetting = JSON.parse(sessionStorage?.getItem('setting') || "")
            setting.openMenus = initialSetting.openMenus
            setting.activeMenu = initialSetting.activeMenu
        }

        setIsrender(!isRender)
    }, [])

    useEffect(() => {
        if (id) {
            const activeMenu = listFlattenMenuSidebar?.filter((data) => data?.id === id)[0]
            setting.activeMenu = activeMenu
            setIsrender(!isRender)
        }
    }, [id, location])

    const handleChangeActiveMenu = () => {
        isMaxMd && handleToggleSidebar()
    }

    return (
        <>
            <div
                id="container-sidebar"
                className=" h-full "
                onClick={handleToggleSidebar}
            >
                <div
                    id="sidebar"
                    onClick={handleStopPropagation}
                    style={{ top: topPosition, }}
                    className={`fixed overflow-y-hidden h-[calc(100%-3rem)] left-0 bg-white w-0 ${showSidebar !== false && "md:w-[17rem]"}`}
                >

                    <div
                        className="p-8 w-full  flex flex-col gap-4 relative  h-full"
                    >
                        <div
                            id="icon-close"
                            className="hidden justify-between absolute top-6 right-6 cursor-pointer ml-auto"
                        >
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
            <div
                id="overlay-sidebar"
                className={`md-overlay min-h-screeen`}
            />
        </>
    )



}



export default Sidebar