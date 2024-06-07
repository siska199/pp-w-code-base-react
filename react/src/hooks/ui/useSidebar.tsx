

const useSidebar = () => {

    const handleToggleSidebar = () => {
        const sidebarContainer = document.getElementById('container-sidebar') as HTMLDivElement
        const sidebar = document.getElementById('sidebar') as HTMLDivElement
        const sidebarOverlay = document.getElementById('overlay-sidebar') as HTMLDivElement
        const iconClose = document.getElementById('icon-close') as HTMLDivElement

        const isToggle = sidebarContainer?.classList.contains('md-show')

        const listClassSidebarContainer = ['md-show', 'md-modal', 'min-w-full']
        const listClassSidebar = ['!w-[20rem]', '!static', '!top-0']
        const listClassOverlay = ['md-show']
        const listClassIconClose = ['!flex']

        if (isToggle) {
            sidebarContainer?.classList.remove(...listClassSidebarContainer)
            sidebar?.classList.remove(...listClassSidebar)
            sidebarOverlay?.classList.remove(...listClassOverlay)
            iconClose?.classList.remove(...listClassIconClose)
        } else {
            sidebarContainer?.classList.add(...listClassSidebarContainer)
            sidebar?.classList.add(...listClassSidebar)
            sidebarOverlay?.classList.add(...listClassOverlay)
            iconClose?.classList.add(...listClassIconClose)

        }

    }
    return {
        handleToggleSidebar
    }
}

export default useSidebar