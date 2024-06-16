import { IconHamburger, IconSearch } from "@assets/icons"
import Breadcrumb from "@components/ui/Breadcrumb"
import Button from "@components/ui/Button"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import listMenuNavbar from "@lib/utils/data/menu-navbar"


const Navbar = () => {
    const { handleToggleSidebar } = useSidebar()

    return (
        <nav id="navbar" className="bg-blur  w-full sticky  z-[9] flex items-center justify-between white top-0 left-0 border-b px-8 py-4">
            <div className="flex items-center gap-8">
                <Button variant={"plain"} className="!p-0  md:hidden" onClick={handleToggleSidebar} label={<IconHamburger className="w-[1.75rem]" />} />

                <Logo sizeLogo={"large"} className="hidden md:block" />
                <Breadcrumb items={listMenuNavbar} className={"gap-8"} customeClass={{ active: "bg-primary-50 !pr-2 !rounded-md" }} />
            </div>
            <div>
                <Button className="!py-2 !ring-0 font-normal" variant={"solid-white"} label={<><IconSearch className="icon-gray" /> Search Documentation</>} />

            </div>
        </nav >
    )
}


export default Navbar