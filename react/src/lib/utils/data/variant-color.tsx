const variant = {
    "solid-black": "bg-black border-black text-white",
    "solid-gray": "bg-gray border-gray text-white",
    "solid-primary": "bg-primary border-primary text-white",
    "solid-success": "bg-success border-success text-white",
    "solid-warning": "bg-warning border-warning text-white",
    "solid-error": "bg-error border-error text-white",
    "solid-white": "bg-white border text-black",

    "soft-gray": "bg-gray-50 text-gray-900",
    "soft-black": "bg-gray-100 text-gray-900",
    "soft-primary": "bg-primary-50 text-primary-700",
    "soft-success": "bg-success-50 text-success-700",
    "soft-warning": "bg-warning-50 text-warning-700",
    "soft-error": "bg-error-50 text-error-700",

    "outline-black": "text-black border-black border",
    "outline-gray": "text-gray border-gray border",
    "outline-primary": "text-primary border-primary border",
    "outline-success": "text-success border-success border",
    "outline-warning": "text-warning border-warning border",
    "outline-error": "text-error border-error border",
}


// Vaiant ALERT:
export const variantAlertError = {
    "solid-error": variant["solid-error"],
    "soft-error": variant["soft-error"],
    "outline-error": variant["outline-error"],
}
export const variantAlertSuccess = {
    "solid-success": variant["solid-success"],
    "soft-success": variant["soft-success"],
    "outline-success": variant["outline-success"],
}
export const variantAlertWarning = {
    "solid-warning": variant["solid-warning"],
    "soft-warning": variant["soft-warning"],
    "outline-warning": variant["outline-warning"],
}



//
export const variantBadge = {
    ...variant,
    "soft-border-black": "bg-black-50 text-black-700 border-black border",
    "soft-border-gray": "bg-gray-50 text-gray-700 border-gray border",
    "soft-border-primary": "bg-primary-50 text-primary-700 border-primary border",
    "soft-border-success": "bg-success-50 text-success-700 border-success border",
    "soft-border-warning": "bg-warning-50 text-warning-700 border-warning border",
    "soft-border-error": "bg-error-50 text-error-700 border-error border",
    "soft-border-white": "bg-white-50 text-white-700 border-white border",
}


export const variantButton = {
    ...variant,
    'link-black': 'bg-white text-black',
    'link-gray': 'bg-white text-gray !font-medium hover:underline ',
    'link-primary': 'bg-white text-primary',
    'link-success': 'bg-white text-success',
    'link-warning': 'bg-white text-warning',
    'link-error': 'bg-white text-error',

    'plain': 'bg-white hover:!bg-gray-100 text-gray-900 focus:ring-0 !p-2 border-none disabled:opacity-50',

}


Object.entries(variantButton)?.forEach(([key, value]) => {
    const conditions = [
        { check: key?.includes('primary') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-primary-600'} ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && ' disabled:bg-primary-300'}  focus:ring-4 focus:ring-primary-200 disabled:border-primary-300` },
        { check: key?.includes('warning') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-warning-600'}  ${/outline/.test(key) && 'hover:text-white'}  ${/solid/.test(key) && ' disabled:bg-warning-300'} focus:ring-4 focus:ring-warning-200  disabled:border-warning-300` },
        { check: key?.includes('success') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-success-600'}  ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && ' disabled:bg-success-300 '}   focus:ring-4 focus:ring-success-200 disabled:border-success-300` },
        { check: key?.includes('error') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-error-600'}  ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && '  disabled:bg-error-300 '}   focus:ring-4 focus:ring-error-200 disabled:border-error-300` },
        { check: key?.includes('black') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-black/90'}  ${/outline/.test(key) && 'hover:text-white'}   focus:ring-4 focus:ring-black/70` },
        { check: key?.includes('white') && !key?.includes('link'), suffix: 'hover:!bg-gray-100 !text-gray-900 focus:ring-gray-200 ' },
        { check: key?.includes('link'), suffix: '!p-0 !inline font-normal !rounded-none justify-start' },
    ];

    conditions.forEach(({ check, suffix }) => {
        if (check) {
            variantButton[key as keyof typeof variantButton] = `${value} ${suffix}`;
        }
    });

    if (!key?.includes('link')) {
        variantButton[key as keyof typeof variantButton] = `${variantButton[key as keyof typeof variantButton]} cursor-pointer-custome`;
    }
});





export default variant