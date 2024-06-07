import { useEffect, useState } from "react"


const Sidebar = () => {
    const [topPosition, setTopPosition] = useState(0)

    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.offsetHeight)
        }

    }, [])



    return (
        <>
            <div id="container-sidebar" className="h-full ">
                <div
                    id="sidebar"
                    style={{
                        top: topPosition,
                    }} className={`fixed h-full left-0 transition-all duration-500  border bg-white  overflow-y-auto w-0 md:w-[15rem]`}>
                    lorem ipsujhsdguygduwe csdguycd
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`}></div>
        </>
    )



}



// const listGroupMenu = [
//     {
//         id: 0,
//         name: 'Getting Started',
//         childs: [
//             {
//                 id: 0,
//                 name: 'introduction',
//                 url: '/'
//             },
//             {
//                 id: 0,
//                 name: 'Instala',
//                 url: '/'
//             }
//         ]
//     },
//     {
//         id: 1,
//         name: 'Components',
//         childs: [
//             {

//             }
//         ]
//     }
// ]
export default Sidebar