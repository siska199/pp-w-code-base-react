import IconChevronToggle from "@assets/icons/IconChevronToggle";
import { cn, isEmptyValue } from "@lib/utils/helper";
import { useEffect, useState } from "react";

export interface TItemMenu {
    name: string;
    url?: string;
    childs?: TItemMenu[];
}

interface TLevelSetting {
    customeClass?: {
        label?: string;
    };
    defaultOpen?: boolean;
}

export interface TMenuSettings {
    [level: number]: TLevelSetting;
    activeMenu: {
        level: number;
        name: string;
        parent: string;
    }
}

export interface TParamsOnChangeMenu {
    groupMenu: TItemMenu;
    level: number;
    openMenus: { [key: string]: boolean }
    parent: string;
}

interface TProps {
    menu: TItemMenu[];
    onChangeMenu: (params: TParamsOnChangeMenu) => any;
    setting?: TMenuSettings;
    level?: number;
    isOpen?: boolean;
    parent?: string;
}

const NestedMenu = (props: TProps) => {
    return <RenderMenu {...props} isOpen={true} />;
};

const RenderMenu = (props: TProps) => {
    const { setting, menu, level = 0, parent, isOpen, onChangeMenu: handleOnChangeMenu } = props;
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const defaultOpenMenus: any = {};
        const initializeOpenMenus = (menus: TItemMenu[], level: number) => {
            menus.forEach((menu) => {
                if (menu.childs && (setting?.[level]?.defaultOpen || false)) {
                    defaultOpenMenus[menu.name] = true;
                    initializeOpenMenus(menu.childs as TItemMenu[], level + 1);
                }
            });
        };

        initializeOpenMenus(menu, level);

        setOpenMenus(defaultOpenMenus);
    }, [level, menu, setting]);

    const handleOnClickMenu = (groupMenu: TItemMenu) => {
        if (isEmptyValue(groupMenu?.childs)) {
            handleOnChangeMenu({
                groupMenu,
                openMenus,
                level,
                parent: parent || ""
            });
        } else {
            setOpenMenus((prevOpenMenus) => ({
                ...prevOpenMenus,
                [groupMenu.name]: !prevOpenMenus[groupMenu.name],
            }));
        }
    };

    return (
        <ul className={cn({
            "flex flex-col overflow-y-auto transition-all duration-100 ease": true,
            "ml-2": level > 1,
            "opacity-100 max-h-full": isOpen || (level < setting?.activeMenu?.level && setting?.activeMenu.parent === parent),
            "opacity-0 max-h-0": !isOpen,
        })}>
            {menu?.map((groupMenu: TItemMenu, i) => (
                <li key={i} className="">
                    <div
                        onClick={() => handleOnClickMenu(groupMenu)}
                        className={cn({
                            "mb-2 flex items-center cursor-pointer": true,
                        })}
                    >
                        <span className={cn({
                            "": true,
                            [setting?.[level]?.customeClass?.label || ""]: setting?.[level]?.customeClass?.label
                        })}>{groupMenu?.name}</span>
                        {!isEmptyValue(groupMenu?.childs) && (
                            <IconChevronToggle className={` icon-primary h-[1.1rem]`} variant="2" isOpen={openMenus[groupMenu.name]} />
                        )}
                    </div>

                    {!isEmptyValue(groupMenu?.childs) && (
                        <RenderMenu
                            menu={groupMenu?.childs as TItemMenu[]}
                            parent={groupMenu?.name}
                            level={level + 1}
                            setting={setting}
                            onChangeMenu={handleOnChangeMenu}
                            isOpen={openMenus[groupMenu.name]}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};


export default NestedMenu;
