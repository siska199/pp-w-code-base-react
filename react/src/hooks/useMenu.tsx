import { useMatches } from "react-router-dom"


const useMenu = () => {
    const matches = useMatches()
    const pagesMatch = matches?.filter(page => page.pathname === location.pathname)
    const currentPageData: any = pagesMatch?.[pagesMatch?.length - 1]?.handle

    return {
        ...currentPageData
    }
}

export default useMenu