const variant = {
    "solid-black": "bg-black",
    "solid-gray": "bg-gray",
    "solid-primary": "bg-primary",
    "solid-success": "bg-success",
    "solid-warning": "bg-warning",
    "solid-error": "bg-error",
    "solid-white": "bg-white",

    "soft-black": "bg-black-50 text-black-700",
    "soft-gray": "bg-gray-50 text-gray-700",
    "soft-primary": "bg-primary-50 text-primary-700",
    "soft-success": "bg-success-50 text-success-700",
    "soft-warning": "bg-warning-50 text-warning-700",
    "soft-error": "bg-error-50 text-error-700",
    "soft-white": "bg-white-50 text-white-700",

    "outline-black": "text-black border-black border",
    "outline-gray": "text-gray border-gray border",
    "outline-primary": "text-primary border-primary border",
    "outline-success": "text-success border-success border",
    "outline-warning": "text-warning border-warning border",
    "outline-error": "text-error border-error border",
    "outline-white": "text-white border-white border"
}


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
    'link-gray': 'bg-white text-gray',
    'link-primary': 'bg-white text-primary',
    'link-success': 'bg-white text-success',
    'link-warning': 'bg-white text-warning',
    'link-error': 'bg-white text-error',


}

export default variant