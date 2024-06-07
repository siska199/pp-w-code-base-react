

const useSidebar = () => {

    const handleToggleSidebar = () => {
        const sidebarContainer = document.getElementById('container-sidebar')
        const sidebar = document.getElementById('sidebar')
        const sidebarOverlay = document.getElementById('overlay-sidebar')
        const iconClose = document.getElementById('icon-close')

        const isToggle = sidebarContainer?.classList.contains('md-show')

        const listClassSidebarContainer = ['md-show', 'md-modal', 'min-w-full']
        const listClassSidebar = ['!w-[25rem]', '!static',]
        const listClassOverlay = ['md-show']
        const listClassIconClose = ['!flex']


        isToggle ? sidebarContainer?.classList.remove(...listClassSidebarContainer) : sidebarContainer?.classList.add(...listClassSidebarContainer)
        isToggle ? sidebar?.classList.remove(...listClassSidebar) : sidebar?.classList.add(...listClassSidebar);
        isToggle ? sidebarOverlay?.classList.remove(...listClassOverlay) : sidebarOverlay?.classList.add(...listClassOverlay)
        isToggle ? iconClose?.classList.remove(...listClassIconClose) : iconClose?.classList.add(...listClassIconClose)
    }
    return {
        handleToggleSidebar
    }
}

export default useSidebar