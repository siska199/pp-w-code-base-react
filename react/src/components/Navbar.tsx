import { IconHamburger, IconSearch } from "@assets/icons"
import Breadcrumb from "@components/ui/Breadcrumb"
import Button from "@components/ui/Button"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import listMenuNavbar from "@lib/utils/data/menu-navbar"


const Navbar = () => {
    const { handleToggleSidebar } = useSidebar()

    return (
        <nav id="navbar" className="bg-blur w-full sticky  z-[11] flex items-center justify-between white top-0 left-0 border-b px-8 py-4">
            <div className="flex items-center gap-8">
                <Button variant={"plain"} className="!p-0  md:hidden" onClick={handleToggleSidebar} label={<IconHamburger className="" />} />

                <Logo sizeLogo={"large"} className="!hidden md:!flex" />
                <Breadcrumb items={listMenuNavbar} withIconDivider={false} className={"gap-8 hidden md:flex "} customeClass={{ active: "bg-primary-50 text-primary-700 !px-2 !rounded-md", label: "!text-primary-700" }} />
            </div>
            <div>
                <Button className="!py-2 !ring-0 font-normal" variant={"solid-white"} label={<><IconSearch className="icon-gray" /> Search Documentation</>} />

            </div>
        </nav >
    )
}


export default Navbar