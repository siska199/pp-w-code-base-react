import { IconClose } from "@assets/icons"
import Link from "@components/ui/Link"
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
                <div id="sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={`fixed overflow-y-hidden  h-[calc(100%-3rem)] left-0   bg-white   w-0 md:w-[17rem]`}>

                    <div className="p-8 w-full flex flex-col gap-4 relative  h-full">
                        <div id="icon-close" className="hidden justify-between absolute top-6 right-6 cursor-pointer ml-auto">
                            <Logo className="text-body-medium"/>
                            <IconClose onClick={handleToggleSidebar} className="ml-auto" />
                        </div>
                        <div className="flex flex-col gap-4  overflow-y-auto max-h-full ">
                            {
                                listGroupMenu?.map((groupMenu, i) => <div key={i} className="font-medium">
                                    <div className="mb-4">{groupMenu?.name}</div>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            groupMenu?.childs?.map((menu, j) => <Link key={j} url={menu.url} label={menu?.name} />)
                                        }
                                    </ul>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`} ></div>
        </>
    )



}

const listGroupMenu = [
    {
        name: 'Components',
        childs: [
            {
                name: 'Accordion',
                url: '/'
            },
            {
                name: 'Badge',
                url: '/'
            },
            {
                name: 'Button',
                url: '/'
            },
            {
                name: 'Container',
                url: '/'
            },
            {
                name: 'Copy Text',
                url: '/'
            },
            {
                name: 'Dropdown',
                url: '/'
            },
            {
                name: 'Helper Message',
                url: '/'
            },
            {
                name: 'Image',
                url: '/'
            },
            {
                name: 'Input Base',
                url: '/'
            },
            {
                name: 'Input Checkbox',
                url: '/'
            },
            {
                name: 'Input Currency',
                url: '/'
            },
            {
                name: 'Input Date',
                url: '/'
            },
            {
                name: 'Input NPWP',
                url: '/'
            },
            {
                name: 'Input OTP',
                url: '/'
            },
            {
                name: 'Input Percentage',
                url: '/'
            },
            {
                name: 'Input Phone Number',
                url: '/'
            },
            {
                name: 'Input Radio Button',
                url: '/'
            },
            {
                name: 'Input Select',
                url: '/'
            },
            {
                name: 'Input Text Area',
                url: '/'
            },
            {
                name: 'Link',
                url: '/'
            },
            {
                name: 'Logo',
                url: '/'
            },
            {
                name: 'Progressbar',
                url: '/'
            },
            {
                name: 'Progress Step',
                url: '/'
            },
            {
                name: 'Modal',
                url: '/'
            },
        ]
    }
]


export default Sidebar