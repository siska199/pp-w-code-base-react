import IconChevronToggle from "@assets/icons/IconChevronToggle";
import Button from "@components/ui/Button";
import { cn, isEmptyValue } from "@lib/utils/helper";
import { useLocation } from "react-router-dom";

export interface TMenuItem {
    id: string;
    name: string;
    url?: string;
    parentId: string | null;
    childs?: TMenuItem[];
    level?: number;
}

interface TLevelSetting {
    customeClass?: {
        label?: string;
    };
}

export interface TMenuSettings {
    [level: number]: TLevelSetting;
    activeMenu: TMenuItem
    openMenus: { [key: string]: boolean }
}

export interface TParamsOnChangeMenu {
    groupMenu: TMenuItem
    level: number;
    parentId: string;
}

interface TProps {
    menu: TMenuItem[];
    onChangeMenu: (params: TParamsOnChangeMenu) => any;
    level?: number;
    isOpen?: boolean;
    parentId?: string;
    setting: TMenuSettings;
    setSetting: React.Dispatch<React.SetStateAction<TMenuSettings>>

}

const NestedMenu = (props: TProps) => {
    return <RenderMenu {...props} isOpen={true} />;
};

const RenderMenu = (props: TProps) => {
    const location = useLocation();

    const { setting, menu, setSetting, level = 0, parentId, isOpen, onChangeMenu: handleOnChangeMenu } = props;

    const handleOnClickMenu = (groupMenu: TMenuItem) => {
        let updateSetting = setting
        if (isEmptyValue(groupMenu?.childs)) {
            updateSetting = {
                ...setting,
                activeMenu: {
                    ...setting?.activeMenu,
                    level: level,
                    id: groupMenu?.id,
                    name: groupMenu?.name,
                    parentId: parentId || "",
                    url: ""
                }
            }
        } else {
            updateSetting = {
                ...setting,
                openMenus: {
                    ...setting.openMenus,
                    [groupMenu.id]: !setting.openMenus[groupMenu.id]
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
            " ml-2": level > 0,
            "opacity-100 max-h-full": isOpen,
        })}>
            {menu?.map((groupMenu: TMenuItem, i) => (
                <li key={i} className={cn({
                    "scrollbar-hidden ": true,
                    ' pr-4 ': level == 0
                })}>
                    <div
                        onClick={() => handleOnClickMenu(groupMenu)}
                        className={cn({
                            "flex items-center py-1": true,
                            "": level > 0
                        })}
                    >
                        <Button
                            to={groupMenu?.url || location.pathname}
                            className={cn({
                                "w-full !py-1 !pl-2 b": true,
                                "border-l bg-primary-50 w-full rounded-tr-md rounded-br-md border-primary-700 font-semibold ": setting?.activeMenu.id === groupMenu?.id && groupMenu.url,
                                [setting?.[level]?.customeClass?.label || ""]: setting?.[level]?.customeClass?.label
                            })}
                            label={groupMenu?.name}
                        />

                        {!isEmptyValue(groupMenu?.childs) && (
                            <IconChevronToggle className={` icon-primary h-[1.1rem]`} variant="2" isOpen={setting?.openMenus[groupMenu.id]} />
                        )}
                    </div>

                    {!isEmptyValue(groupMenu?.childs) && (
                        <RenderMenu
                            menu={groupMenu?.childs as TMenuItem[]}
                            parentId={groupMenu?.id}
                            level={level + 1}
                            setting={setting}
                            setSetting={setSetting}
                            onChangeMenu={handleOnChangeMenu}
                            isOpen={setting?.openMenus[groupMenu.id]}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};


export default NestedMenu;
