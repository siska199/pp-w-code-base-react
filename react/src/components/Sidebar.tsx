import { IconClose } from "@assets/icons"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"
import NestedMenu, { TItemMenu } from "./ui/NestedMenu"


const Sidebar = () => {
    const [topPosition, setTopPosition] = useState(0);
    const { handleToggleSidebar } = useSidebar();


    const [activeMenu, setActiveMenu] = useState<TItemMenu>({
        name: "",
        url: "",
        childs: []
    })

    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.clientHeight)
        }

    }, [])

    const handleChangeActiveMenu = (data: TItemMenu) => {
        setActiveMenu(data)
    }


    return (
        <>
            <div id="container-sidebar" className="h-full" onClick={handleToggleSidebar}>
                <div id="sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={`fixed overflow-y-hidden  h-[calc(100%-3rem)] left-0   bg-white   w-0 md:w-[17rem]`}>

                    <div className="p-8 w-full flex flex-col gap-4 relative  h-full">
                        <div id="icon-close" className="hidden justify-between absolute top-6 right-6 cursor-pointer ml-auto">
                            <Logo className="text-body-medium" />
                            <IconClose onClick={handleToggleSidebar} className="ml-auto" />
                        </div>
                        <NestedMenu
                            setting={{
                                "0": {
                                    expandInFirstRender: true,
                                    customeClass: {
                                        label: "text-black font-medium"
                                    },
                                    defaultOpen: false
                                },
                                "1": {
                                    defaultOpen: false
                                }
                            }}
                            menu={listGroupMenu} activeMenu={activeMenu} onChangeMenu={handleChangeActiveMenu} />
                    </div>
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`} ></div>
        </>
    )



}

const listGroupMenu = [
    {
        name: 'Getting Started',
        childs: [
            {
                name: 'Introduction',
                url: '/docs',
            },
            {
                name: 'Installation',
                url: '/docs/installation',
            },
            {
                name: 'Typography',
                url: '/docs/components/typography',
            }
        ]
    },
    {
        name: 'Icons',
        url: '/docs/icons'
    },
    {
        name: 'Components',
        childs: [
            {
                name: 'Accordion',
                url: '/docs/components/accordion'
            },
            {
                name: 'Alert',
                url: '/docs/components/alert'
            },
            {
                name: 'Avatar',
                url: '/docs/components/avatar'
            },
            {
                name: 'Badge',
                url: '/docs/components/badge'
            },
            {
                name: 'Breadcrumb',
                url: '/docs/components/breadcrumb'
            },
            {
                name: 'Button',
                url: '/docs/components/button'
            },
            {
                name: 'Container',
                url: '/docs/components/container'
            },
            {
                name: 'Copy Text',
                url: '/docs/components/copy-text'
            },
            {
                name: 'Dropdown',
                url: '/docs/components/dropdown'
            },
            {
                name: 'Helper Message',
                url: '/docs/components/helper-message'
            },
            {
                name: 'Image',
                url: '/docs/components/image'
            },
            {
                name: 'Input',
                url: '/docs/components/input',
                childs: [
                    {
                        name: 'Base',
                        url: '/docs/components/input/base',
                    },
                    {
                        name: 'Checkbox',
                        url: '/docs/components/input/checkbox',
                    },
                    {
                        name: 'Multiple Checkbox',
                        url: '/docs/components/input/multiple-checkbox',
                    },
                    {
                        name: 'Currency',
                        url: '/docs/components/input/currency',
                    },
                    {
                        name: 'Date',
                        url: '/docs/components/input/date',
                    },
                    {
                        name: 'NPWP',
                        url: '/docs/components/input/npwp',
                    },
                    {
                        name: 'OTP',
                        url: '/docs/components/input/otp',
                    },
                    {
                        name: 'Percentage',
                        url: '/docs/components/input/percentage',
                    },
                    {
                        name: 'Phone Number',
                        url: '/docs/components/input/phone-number'
                    },
                    {
                        name: 'Radio Button',
                        url: '/docs/components/input/phone-number'
                    },
                    {
                        name: 'Select',
                        url: '/docs/components/input/select'
                    },
                    {
                        name: 'Text Area',
                        url: '/docs/components/input/text-area',
                    },
                ]
            },
            {
                name: 'Link',
                url: '/docs/components/link'
            },
            {
                name: 'List',
                url: '/docs/components/list'
            },
            {
                name: 'Progressbar',
                url: '/docs/components/progressbar'
            },
            {
                name: 'Progress Step',
                url: '/docs/components/progres-step'
            },
            {
                name: 'Modal',
                url: '/docs/components/modal',
                childs: [
                    {
                        name: 'Modal Confirmation',
                        url: '/docs/components/modal/confirmation',
                    }
                ]
            },
        ]
    }
]


export default Sidebar