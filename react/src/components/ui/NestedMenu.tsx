import IconChevronToggle from "@assets/icons/IconChevronToggle";
import LinkCustome from "@components/ui/Link";
import { cn, isEmptyValue } from "@lib/utils/helper";
import { useLocation } from "react-router-dom";

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
    openMenus: { [key: string]: boolean }
}

export interface TParamsOnChangeMenu {
    groupMenu: TItemMenu;
    level: number;
    parent: string;
}

interface TProps {
    menu: TItemMenu[];
    onChangeMenu: (params: TParamsOnChangeMenu) => any;
    level?: number;
    isOpen?: boolean;
    parent?: string;
    setting: TMenuSettings;
    setSetting: React.Dispatch<React.SetStateAction<TMenuSettings>>

}

const NestedMenu = (props: TProps) => {
    return <RenderMenu {...props} isOpen={true} />;
};

const RenderMenu = (props: TProps) => {
    const location = useLocation();

    const { setting, menu, setSetting, level = 0, parent, isOpen, onChangeMenu: handleOnChangeMenu } = props;

    const handleOnClickMenu = (groupMenu: TItemMenu) => {
        let updateSetting = setting
        if (isEmptyValue(groupMenu?.childs)) {
            updateSetting = {
                ...setting,
                activeMenu: {
                    ...setting?.activeMenu,
                    level: level,
                    name: groupMenu?.name,
                    parent: parent || ""
                }
            }
        } else {
            updateSetting = {
                ...setting,
                openMenus: {
                    ...setting.openMenus,
                    [groupMenu.name]: !setting.openMenus[groupMenu.name]
                }
            }
        }

        sessionStorage.setItem('setting', JSON.stringify(updateSetting))
        setSetting(updateSetting)
    };

    return (
        <ul className={cn({
            "flex flex-col  opacity-0 max-h-0 overflow-y-auto transition-all duration-300 ease": true,
            "border-l scrollbar-hidden ": level > 0,
            " ml-2": level > 1,
            "opacity-100 max-h-full": isOpen,
        })}>
            {menu?.map((groupMenu: TItemMenu, i) => (
                <li key={i} className="scrollbar-hidden">
                    <div
                        onClick={() => handleOnClickMenu(groupMenu)}
                        className={cn({
                            "flex items-center cursor-pointer py-1": true,
                        })}
                    >
                        <LinkCustome
                            to={groupMenu?.url || location.pathname}
                            className={cn({
                                "": true,
                                "pl-2": level > 0,
                                "border-l border-primary-700 text-primary-700": setting?.activeMenu.name === groupMenu?.name,
                                [setting?.[level]?.customeClass?.label || ""]: setting?.[level]?.customeClass?.label
                            })}>
                            {groupMenu?.name}
                        </LinkCustome>
                        {!isEmptyValue(groupMenu?.childs) && (
                            <IconChevronToggle className={` icon-primary h-[1.1rem]`} variant="2" isOpen={setting?.openMenus[groupMenu.name]} />
                        )}
                    </div>

                    {!isEmptyValue(groupMenu?.childs) && (
                        <RenderMenu
                            menu={groupMenu?.childs as TItemMenu[]}
                            parent={groupMenu?.name}
                            level={level + 1}
                            setting={setting}
                            setSetting={setSetting}
                            onChangeMenu={handleOnChangeMenu}
                            isOpen={setting?.openMenus[groupMenu.name]}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};


export default NestedMenu;
