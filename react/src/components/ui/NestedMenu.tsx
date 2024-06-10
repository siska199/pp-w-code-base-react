import IconChevronToggle from "@assets/icons/IconChevronToggle";
import { cn, isEmptyValue } from "@lib/utils/helper";
import { TItemMenu, TObject } from "@types";
import { useState } from "react";

interface TProps{
    menu :TItemMenu[];
    activeMenu : TItemMenu;
    onChangeMenu : (params:TItemMenu)=>any;
    setting? :TObject;
    level  :number;
}

const NestedMenu = (props: TProps) => {

  return <RenderMenu {...props} level={0}/>
}


const RenderMenu = (props:TProps) => {
    const {activeMenu,menu,setting, level=0, onChangeMenu:handleOnChangeMenu}=props
    const [isOpen,setIsOpen] =useState(false);

    const handleOnClickMenu = (groupMenu:TItemMenu)=>{
        isEmptyValue(groupMenu?.childs) ? handleOnChangeMenu(groupMenu): setIsOpen(!isOpen)
    }
    return (
        <ul className={cn({
            "flex flex-col   overflow-y-auto max-h-full ":true,
            "ml-2":level>1
        })}>
            {menu?.map((groupMenu:TItemMenu, i) => (
                <li key={i} className="">
                    <div  
                        onClick={ ()=>handleOnClickMenu(groupMenu)}
                        className={cn({
                            "mb-2 flex items-center cursor-pointer ":true,
                        })}
                    >
                            <span className={cn({
                                "":true,
                                [setting?.[level]?.customeClass?.label || ""] :setting?.[level]?.customeClass?.label
                            })}>{groupMenu?.name} </span>
                            {!isEmptyValue(groupMenu?.childs) && <IconChevronToggle className="icon-primary  h-[1.1rem]" isOpen={groupMenu?.name===activeMenu?.name}/>} 
                    </div>
                    
                    {!isEmptyValue(groupMenu?.childs) && RenderMenu({
                        menu : groupMenu?.childs as TItemMenu[],
                        level:level+1,
                        activeMenu,
                        setting,
                        onChangeMenu:handleOnChangeMenu
                    })}
                </li>
            ))}
        </ul>
    );
};


export default NestedMenu