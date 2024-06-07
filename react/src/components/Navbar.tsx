import Logo from "@components/ui/Logo"


const Navbar = () => {

    const handleToggleSidebar = () => {
        const sidebarContainer = document.getElementById('container-sidebar')
        const sidebar = document.getElementById('sidebar')
        const sidebarOverlay = document.getElementById('overlay-sidebar')

        sidebarContainer?.classList.add(...['md-show', 'md-modal', 'min-w-full'])
        sidebar?.classList.add(...['!w-[15rem]', '!static',]);
        sidebarOverlay?.classList.add(...['md-show'])

        console.log('clicked')
    }

    return (
        <nav id="navbar" className="w-full sticky  z-[99] flex items-center justify-between white top-0 left-0 border border-error px-8 py-4">
            <ul className="flex gap-4 text-gray-500">
                <Logo onClick={handleToggleSidebar} className="block md:hidden cursor-pointer" />
                {
                    listMenu?.map((menu, i) => <ul key={i} className="">{menu?.label}</ul>)
                }
            </ul>
            <div>

            </div>
        </nav>
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