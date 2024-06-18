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
        "true": "fixed z-[99] !max-w-[17rem] !w-[17rem]",
        "false": "static  w-[23rem] max-w-[23rem] "
    }
}

export default variantsAlert 