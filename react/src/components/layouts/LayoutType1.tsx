import Navbar from "@components/Navbar";
import RightSidebar from "@components/RightSidebar";
import Sidebar from "@components/Sidebar";
import Alert from "@components/ui/Alert";
import useMediaQuery from "@hooks/useMediaQuery";
import useMenu from "@hooks/useMenu";
import useGlobalStore from "@store";
import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const LayoutType1 = () => {
  const [searchParams] = useSearchParams();
  const { alertConfig } = useGlobalStore();

  const { showSidebar, showRightSidebar } = useMenu();
  const { isMinLg, isMinMd } = useMediaQuery();

  const [widthSidebar, setWidthSidebar] = useState(0);
  const [widthRightSidebar, setWidthRightSidebar] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [rightPosition, setRightPosition] = useState(0);
  const [isRender, setIsrender] = useState(false);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const sidebarComp = document.getElementById("sidebar") as HTMLDivElement;
    const rightsSidebarComp = document.getElementById("right-sidebar") as HTMLDivElement;

    if (sidebarComp) {
      setWidthSidebar(sidebarComp?.offsetWidth);
      setLeftPosition(sidebarComp?.offsetWidth);
      setWidthRightSidebar(rightsSidebarComp?.offsetWidth);
      setRightPosition(rightsSidebarComp?.offsetWidth);
    }

    if (showSidebar === false) {
      sessionStorage?.removeItem("setting");
    }
    setIsrender(!isRender);
  }, [showSidebar]);

  useEffect(() => {
    setRightPosition(isMinLg ? widthRightSidebar : 0);
    setLeftPosition(isMinMd ? widthSidebar : 0);
    setIsrender(!isRender);
  }, [isMinLg, isMinMd, widthSidebar, widthRightSidebar, showSidebar]);

  useEffect(() => {
    if (!load) {
      const elmContainerLayout = document?.getElementById("layout");
      const id = searchParams?.get("id");
      const elm = document?.getElementById(id || "");

      if (id) {
        elm?.scrollIntoView();
      } else {
        elmContainerLayout?.scrollTo(0, 0);
      }
    }
  }, [location?.pathname, load]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, [load]);


  return (
    <>
      <div className={`${load ? "h-screen items-center flex justify-center" : "hidden"} `}>loading...</div>
      <main id="layout" className={`${load && "opacity-0"} !scroll-pt-[5rem] overflow-x-hidden relative bg-white h-screen min-h-screen w-full overflow-y-auto`}>
        <Navbar />
        <div className="flex relative overflow-x-hidden  h-[calc(100%-5rem)] ">
          <Sidebar />
          <div
            className=" p-8 flex transtion-all duration-10 overflow-x-auto !overflow-visible"
            style={{
              marginLeft: showSidebar === false ? 0 : leftPosition,
              marginRight: showRightSidebar === false ? 0 : rightPosition,
              width: showSidebar === false && showRightSidebar === false ? "100%" : `calc(100% - ${(showSidebar === false ? 0 : leftPosition) + (showRightSidebar === false ? 0 : rightPosition)}px)`,
            }}
          >
            <div className="w-full max-w-full h-full flex flex-col gap-4 pb-10 !overflow-visible">
              <Outlet />
            </div>
            {showSidebar !== false && <RightSidebar />}
          </div>
        </div>
      </main>
      <Alert {...alertConfig} />
    </>
  );
};

export default LayoutType1;
