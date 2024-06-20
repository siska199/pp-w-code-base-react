import variant, { variantAlertError, variantAlertSuccess, variantAlertWarning } from "@lib/utils/variants/variant-color"

const variantsAlert = {
    variant: {
        ...variantAlertSuccess,
        ...variantAlertWarning,
        ...variantAlertError,
        notification: {
            ...variant
        },
        info: {
            ...variant
        }
    },
    position: {
        'top-left': 'top-6 left-6',
        "top-right": "top-6 right-6",
        'bottom-left': 'bottom-6 left-6',
        "bottom-right": "bottom-6 right-6"

    },
    isFixed: {
        "true": "fixed z-[99] ",
        "false": "static  "
    }
}

export default variantsAlert 