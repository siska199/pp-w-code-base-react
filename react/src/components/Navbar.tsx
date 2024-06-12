import { IconHamburger, IconSearch } from "@assets/icons"
import Button from "@components/ui/Button"
import LinkCustome from "@components/ui/Link"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"
import listMenuNavbar from "@lib/utils/data/menu-navbar"


const Navbar = () => {
    const { handleToggleSidebar } = useSidebar()

    return (
        <nav id="navbar" className="bg-blur  w-full sticky  z-[9] flex items-center justify-between white top-0 left-0 border-b px-8 py-4">
            <div className="flex items-center gap-8">
                <Button variant={"plain"} className="!p-0  md:hidden" onClick={handleToggleSidebar}>
                    <IconHamburger className="w-[1.75rem]" />
                </Button>
                <Logo sizeLogo={"large"} className="hidden md:block" />
                <ul className="hidden md:flex gap-8 ">
                    {
                        listMenuNavbar?.map((menu, i) => <LinkCustome key={i} to={menu?.url} className="hover:!no-underline">
                            {menu?.label}
                        </LinkCustome>)
                    }
                </ul>
            </div>
            <div>
                <Button className="!py-1 !ring-0" variant={"white"}>
                    <IconSearch className="icon-gray" /> Search Documentation
                </Button>
            </div>
        </nav >
    )
}


export default Navbar