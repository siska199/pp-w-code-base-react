import { IconHamburger } from "@assets/icons"
import Button from "@components/ui/Button"
import Link from "@components/ui/Link"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"


const Navbar = () => {
    const { handleToggleSidebar } = useSidebar()



    return (
        <nav id="navbar" className="bg-blur w-full sticky  z-[99] flex items-center justify-between white top-0 left-0 border-b px-8 py-4">
            <div className="flex items-center gap-8">
                <Button variant={"icon"} className="!p-0  md:hidden" onClick={handleToggleSidebar}>
                    <IconHamburger className="w-[1.75rem]" />
                </Button>
                <Logo className="hidden md:block" />
                <ul className="hidden md:flex gap-8 ">
                    {
                        listMenu?.map((menu, i) => <Link key={i} label={menu?.label} url={menu?.url} className="hover:!no-underline" />)
                    }
                </ul>
            </div>
            <div>
            </div>
        </nav >
    )
}

const listMenu = [
    {
        label: 'Docs',
        url: '/docs'
    },
    {
        label: 'Components',
        url: '/docs/components/acccordion'
    },
    {
        label: 'Examples',
        url: '/docs/examples/form'
    },
    {
        label: 'Github',
        url: 'https://github.com/shadcn-ui/ui'
    }
]

export default Navbar