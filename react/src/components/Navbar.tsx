import { IconHamburger } from "@assets/icons"
import Button from "@components/ui/Button"
import Logo from "@components/ui/Logo"
import useSidebar from "@hooks/ui/useSidebar"


const Navbar = () => {
    const { handleToggleSidebar } = useSidebar()



    return (
        <nav id="navbar" className="bg-blur w-full sticky  z-[99] flex items-center justify-between white top-0 left-0 border-b px-8 py-4">
            <div className="flex items-center gap-4">
                <Button variant={"icon"} className="!p-0  md:hidden" onClick={handleToggleSidebar}>
                    <IconHamburger className="w-[1.75rem]" />
                </Button>
                <ul className="hidden md:flex gap-4 text-gray-500">
                    <Logo onClick={handleToggleSidebar} className="block md:hidden cursor-pointer" />
                    {
                        listMenu?.map((menu, i) => <ul key={i} className="">{menu?.label}</ul>)
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