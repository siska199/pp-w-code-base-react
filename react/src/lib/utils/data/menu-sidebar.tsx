import { TMenuItem } from "@components/ui/NestedMenu";

const listMenuSidebar: TMenuItem[] = [
    {
        id: '0-GS0',
        name: 'Getting Started',
        parentId: null,
    },
    {
        id: '0-C0',
        name: 'Components',
        parentId: null,
    },
    {
        id: '1-I0',
        name: 'Introduction',
        url: '/docs',
        parentId: '0-GS0'
    },
    {
        id: '1-PR1',
        name: 'Pre-requisite ',
        parentId: '0-GS0',
    },
    {
        id: '2-L0',
        name: 'Library',
        url: '/docs/prerequisite/library',
        parentId: '1-PR1'
    },
    {
        id: '2-TC1',
        name: 'Tailwind Config',
        url: '/docs/prerequisite/tailwind-config',
        parentId: '1-PR1'
    },
    {
        id: '2-CF2',
        name: 'CSS File',
        url: '/docs/prerequisite/css-file',
        parentId: '1-PR1'
    },
    {
        id: '2-I3',
        name: 'Icon',
        url: '/docs/prerequisite/icon',
        parentId: '1-PR1'
    },
    {
        id: '2-HF4',
        name: 'Helper Function',
        url: '/docs/prerequisite/helper-function',
        parentId: '1-PR1'
    },
    {
        id: '2-V5',
        name: 'Variant',
        url: '/docs/prerequisite/variant',
        parentId: '1-PR1'
    },
    {
        id: '2-H5',
        name: 'Hook',
        url: '/docs/prerequisite/hook',
        parentId: '1-PR1'
    },
    {
        id: '1-AC0',
        name: 'Accordion',
        url: '/docs/components/accordion',
        parentId: '0-C0'
    },
    {
        id: '1-AL1',
        name: 'Alert',
        url: '/docs/components/alert',
        parentId: '0-C0'
    },
    {
        id: '1-AV2',
        name: 'Avatar',
        url: '/docs/components/avatar',
        parentId: '0-C0'
    },
    {
        id: '1-BA3',
        name: 'Badge',
        url: '/docs/components/badge',
        parentId: '0-C0'
    },
    {
        id: '1-BR4',
        name: 'Breadcrumb',
        url: '/docs/components/breadcrumb',
        parentId: '0-C0'
    },
    {
        id: '1-BU5',
        name: 'Button',
        url: '/docs/components/button',
        parentId: '0-C0'
    },
    {
        id: '1-CO6',
        name: 'Container',
        url: '/docs/components/container',
        parentId: '0-C0'
    },
    {
        id: '1-CT7',
        name: 'Copy Text',
        url: '/docs/components/copy-text',
        parentId: '0-C0'
    },
    {
        id: '1-DR8',
        name: 'Dropdown',
        url: '/docs/components/dropdown',
        parentId: '0-C0'
    },
    {
        id: '1-HM9',
        name: 'Helper Message',
        url: '/docs/components/helper-message',
        parentId: '0-C0'
    },
    {
        id: '1-IM10',
        name: 'Image',
        url: '/docs/components/image',
        parentId: '0-C0'
    },
    {
        id: '1-IN11',
        name: 'Input',
        url: '/docs/components/input',
        parentId: '0-C0'
    },
    {
        id: '2-B0',
        name: 'Base',
        url: '/docs/components/input/base',
        parentId: '1-IN11'
    },
    {
        id: '2-C1',
        name: 'Checkbox',
        url: '/docs/components/input/checkbox',
        parentId: '1-IN11'
    },
    {
        id: '2-MC2',
        name: 'Multiple Checkbox',
        url: '/docs/components/input/multiple-checkbox',
        parentId: '1-IN11'
    },
    {
        id: '2-CU3',
        name: 'Currency',
        url: '/docs/components/input/currency',
        parentId: '1-IN11'
    },
    {
        id: '2-D4',
        name: 'Date',
        url: '/docs/components/input/date',
        parentId: '1-IN11'
    },
    {
        id: '2-N5',
        name: 'NPWP',
        url: '/docs/components/input/npwp',
        parentId: '1-IN11'
    },
    {
        id: '2-O6',
        name: 'OTP',
        url: '/docs/components/input/otp',
        parentId: '1-IN11'
    },
    {
        id: '2-P7',
        name: 'Percentage',
        url: '/docs/components/input/percentage',
        parentId: '1-IN11'
    },
    {
        id: '2-PN8',
        name: 'Phone Number',
        url: '/docs/components/input/phone-number',
        parentId: '1-IN11'
    },
    {
        id: '2-RB9',
        name: 'Radio Button',
        url: '/docs/components/input/radio-button',
        parentId: '1-IN11'
    },
    {
        id: '2-S10',
        name: 'Select',
        url: '/docs/components/input/select',
        parentId: '1-IN11'
    },
    {
        id: '2-TA11',
        name: 'Text Area',
        url: '/docs/components/input/text-area',
        parentId: '1-IN11'
    },
    {
        id: '1-L12',
        name: 'Link',
        url: '/docs/components/link',
        parentId: '0-C0'
    },
    {
        id: '1-L13',
        name: 'List',
        url: '/docs/components/list',
        parentId: '0-C0'
    },
    {
        id: '1-PB14',
        name: 'Progressbar',
        url: '/docs/components/progressbar',
        parentId: '0-C0'
    },
    {
        id: '1-PS15',
        name: 'Progress Step',
        url: '/docs/components/progres-step',
        parentId: '0-C0'
    },
    {
        id: '1-M16',
        name: 'Modal',
        url: '/docs/components/modal',
        parentId: '0-C0'
    },
    {
        id: '2-MC0',
        name: 'Modal Confirmation',
        url: '/docs/components/modal/confirmation',
        parentId: '1-M16'
    },
];

const groupMenuItems = (items: TMenuItem[]): TMenuItem[] => {
    const groupedItems: { [key: string]: TMenuItem } = {};
    const itemMap: { [key: string]: TMenuItem } = items.reduce((acc, item) => {
        acc[item.id] = { ...item, childs: [] };
        return acc;
    }, {} as { [key: string]: TMenuItem });
    items.forEach(item => {
        if (item.parentId === null) {
            groupedItems[item.id] = itemMap[item.id];
        } else {
            if (itemMap[item.parentId]) {
                itemMap[item.parentId].childs!.push(itemMap[item.id]);
            }
        }
    });
    const setLevels = (items: TMenuItem[], level: number): TMenuItem[] => {
        return items.map(item => ({
            ...item,
            level,
            childs: setLevels(item.childs!, level + 1),
        }));
    };
    return setLevels(Object.values(groupedItems), 0);
}
const flattenGroupMenuItems = (items: TMenuItem[]): TMenuItem[] => {
    const flattenedItems: TMenuItem[] = [];

    const flatten = (item: TMenuItem, level: number) => {
        flattenedItems.push({ ...item, childs: undefined, level });
        if (item.childs) {
            item.childs.forEach(child => flatten(child, level + 1));
        }
    };
    items.forEach(item => flatten(item, 0));

    return flattenedItems;
}


export const listGroupingMenuSidebar = groupMenuItems(listMenuSidebar);
export const listFlattenMenuSidebar = flattenGroupMenuItems(listGroupingMenuSidebar)

export default listMenuSidebar