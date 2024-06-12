"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var listMenuSidebar = [
    {
        id: '0-GS0',
        name: 'Getting Started',
        parentId: null,
    },
    {
        id: '0-I0',
        name: 'Icons',
        url: '/docs/icons',
        parentId: null,
    },
    {
        id: '0-C0',
        name: 'Components',
        url: '/docs/components',
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
        name: 'Pre-requisite',
        url: '/docs/prerequisite',
        parentId: '0-GS0'
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
function groupMenuItems(items) {
    var groupedItems = {};
    // Create a map of items by their id for quick lookup
    var itemMap = items.reduce(function (acc, item) {
        acc[item.id] = __assign(__assign({}, item), { childs: [] });
        return acc;
    }, {});
    // Iterate over the items and populate the children arrays
    items.forEach(function (item) {
        if (item.parentId === null) {
            if (!groupedItems[item.id]) {
                groupedItems[item.id] = itemMap[item.id];
            }
        }
        else {
            if (itemMap[item.parentId]) {
                itemMap[item.parentId].childs.push(itemMap[item.id]);
            }
        }
    });
    // Extract the top-level items to an array and return it
    return Object.values(groupedItems).map(function (group) {
        group.childs = group.childs.map(function (child) { return (__assign(__assign({}, child), { level: 1 })); });
        if (group.childs.length > 0) {
            group.childs.forEach(function (child) {
                child.childs = (child.childs || []).map(function (grandChild) { return (__assign(__assign({}, grandChild), { level: 2 })); });
            });
        }
        return __assign(__assign({}, group), { level: 0 });
    });
}
var listGroupingMenuSidebar = groupMenuItems(listMenuSidebar);
console.log(listGroupingMenuSidebar);
exports.default = listMenuSidebar;
