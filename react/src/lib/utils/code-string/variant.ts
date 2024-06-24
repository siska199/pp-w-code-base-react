const codeStringVariant = {
  "variantAlert": "import variant from \"@lib/utils/variants/variant-color\"\r\n\r\nexport const variantAlertError = {\r\n    \"error-solid\": variant[\"solid-error\"],\r\n    \"error-soft\": variant[\"soft-error\"],\r\n    \"error-outline\": variant[\"outline-error\"],\r\n}\r\nexport const variantAlertSuccess = {\r\n    \"success-solid\": variant[\"solid-success\"],\r\n    \"success-soft\": variant[\"soft-success\"],\r\n    \"success-outline\": variant[\"outline-success\"],\r\n}\r\nexport const variantAlertWarning = {\r\n    \"warning-solid\": variant[\"solid-warning\"],\r\n    \"warning-soft\": variant[\"soft-warning\"],\r\n    \"warning-ouline\": variant[\"outline-warning\"],\r\n}\r\n\r\nconst variantsAlert = {\r\n    variant: {\r\n        ...variantAlertSuccess,\r\n        ...variantAlertWarning,\r\n        ...variantAlertError,\r\n        notification: {\r\n            ...variant\r\n        },\r\n        info: {\r\n            ...variant\r\n        }\r\n    },\r\n    position: {\r\n        'top-left': 'top-6 left-6',\r\n        \"top-right\": \"top-6 right-6\",\r\n        'bottom-left': 'bottom-6 left-6',\r\n        \"bottom-right\": \"bottom-6 right-6\"\r\n\r\n    },\r\n    isFixed: {\r\n        \"true\": \"fixed z-[99] \",\r\n        \"false\": \"static  \"\r\n    }\r\n}\r\n\r\nexport default variantsAlert ",
  "variantAvatar": "import variant from \"@lib/utils/variants/variant-color\";\r\n\r\nconst variantsAvatar = {\r\n    variant: {\r\n        ...variant\r\n    },\r\n    size: {\r\n        'tiny': 'w-[1.625rem] h-[1.625rem] text-[12px] [&>span]:w-[0.65rem] [&>span]:h-[0.65rem]',\r\n        'small': 'w-[2.375rem] h-[2.375rem] ',\r\n        base: 'w-[2.875rem] h-[2.875rem] text-[16px]',\r\n        large: 'w-[3.875rem] h-[3.875rem] text-[20px] [&>span]:top-1 [&>span]:right-1'\r\n    },\r\n    shape: {\r\n        'rounded': 'rounded-md [&>span]:-top-1 [&>span]:-right-1',\r\n        'circular': 'rounded-full'\r\n    },\r\n    status: {\r\n        'offline': '[&>span]:bg-gray',\r\n        'online': '[&>span]:bg-success ',\r\n        'away': '[&>span]:bg-warning',\r\n        'dontdistrub': '[&>span]:bg-error',\r\n        icon: '[&>span]:bg-transparent'\r\n    }\r\n}\r\n\r\nexport default variantsAvatar\r\n",
  "variantBadge": "import variant from \"@lib/utils/variants/variant-color\"\r\n\r\nconst variantBadge = {\r\n    ...variant,\r\n    \"softborder-black\": \"bg-gray-100 text-gray-900 border-black border\",\r\n    \"softborder-gray\": \"bg-gray-50  text-gray-700 border-gray border\",\r\n    \"softborder-primary\": \"bg-primary-50 text-primary-700 border-primary border\",\r\n    \"softborder-success\": \"bg-success-50 text-success-700 border-success border\",\r\n    \"softborder-warning\": \"bg-warning-50 text-warning-700 border-warning border\",\r\n    \"softborder-error\": \"bg-error-50 text-error-700 border-error border\",\r\n    \"softborder-white\": \"bg-white-50 text-white-700 border-white border\",\r\n}\r\n\r\nexport default variantBadge",
  "variantButton": "import variant from \"@lib/utils/variants/variant-color\";\r\n\r\nexport const variantButton = {\r\n    ...variant,\r\n    'link-black': 'bg-white text-black',\r\n    'link-gray': 'bg-white text-gray !font-medium hover:underline ',\r\n    'link-primary': 'bg-white text-primary',\r\n    'link-success': 'bg-white text-success',\r\n    'link-warning': 'bg-white text-warning',\r\n    'link-error': 'bg-white text-error',\r\n\r\n    'plain': 'bg-white hover:!bg-gray-100 text-gray-900 focus:ring-0 !p-2 border-none disabled:opacity-50',\r\n    'transparent': 'bg-transparent hover:!bg-white/20 !rounded-full !p-2 focus:ring-0 active:!bg-white/20 disabled:opacity-50',\r\n\r\n}\r\n\r\nObject.entries(variantButton)?.forEach(([key, value]) => {\r\n    const conditions = [\r\n        { check: key?.includes('primary') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-primary-600'} ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && ' disabled:bg-primary-300'}  focus:ring-4 focus:ring-primary-200 disabled:border-primary-300` },\r\n        { check: key?.includes('warning') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-warning-600'}  ${/outline/.test(key) && 'hover:text-white'}  ${/solid/.test(key) && ' disabled:bg-warning-300'} focus:ring-4 focus:ring-warning-200  disabled:border-warning-300` },\r\n        { check: key?.includes('success') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-success-600'}  ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && ' disabled:bg-success-300 '}   focus:ring-4 focus:ring-success-200 disabled:border-success-300` },\r\n        { check: key?.includes('error') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-error-600'}  ${/outline/.test(key) && 'hover:text-white'} ${/solid/.test(key) && '  disabled:bg-error-300 '}   focus:ring-4 focus:ring-error-200 disabled:border-error-300` },\r\n        { check: key?.includes('black') && !key?.includes('link'), suffix: `${/solid|outline/.test(key) && 'hover:bg-black/90'}  ${/outline/.test(key) && 'hover:text-white'}   focus:ring-4 focus:ring-black/70` },\r\n        { check: key?.includes('white') && !key?.includes('link'), suffix: 'hover:!bg-gray-100 !text-gray-900 focus:ring-gray-200 ' },\r\n        { check: key?.includes('link'), suffix: '!p-0 bg-transparent !inline font-normal !rounded-none justify-start' },\r\n    ];\r\n\r\n    conditions.forEach(({ check, suffix }) => {\r\n        if (check) {\r\n            variantButton[key as keyof typeof variantButton] = `${value} ${suffix}`;\r\n        }\r\n    });\r\n\r\n    if (!key?.includes('link')) {\r\n        variantButton[key as keyof typeof variantButton] = `${variantButton[key as keyof typeof variantButton]} cursor-pointer-custome`;\r\n    }\r\n});\r\n",
  "variantColor": "const variant = {\r\n    \"solid-primary\": \"bg-primary border-primary text-white\",\r\n    \"solid-success\": \"bg-success border-success text-white\",\r\n    \"solid-warning\": \"bg-warning border-warning text-white\",\r\n    \"solid-error\": \"bg-error border-error text-white\",\r\n    \"solid-black\": \"bg-black border-black text-white\",\r\n    \"solid-gray\": \"bg-gray border-gray text-white\",\r\n    \"solid-white\": \"bg-white border text-black\",\r\n\r\n    \"soft-primary\": \"bg-primary-50 text-primary-700\",\r\n    \"soft-success\": \"bg-success-50 text-success-700\",\r\n    \"soft-warning\": \"bg-warning-50 text-warning-700\",\r\n    \"soft-error\": \"bg-error-50 text-error-700\",\r\n    \"soft-black\": \"bg-gray-100 text-gray-900\",\r\n    \"soft-gray\": \"bg-gray-50 text-gray-900\",\r\n\r\n    \"outline-primary\": \"text-primary border-primary border\",\r\n    \"outline-success\": \"text-success border-success border\",\r\n    \"outline-warning\": \"text-warning border-warning border\",\r\n    \"outline-error\": \"text-error border-error border\",\r\n    \"outline-black\": \"text-black border-black border\",\r\n    \"outline-gray\": \"text-gray border-gray border\",\r\n}\r\n\r\nexport default variant"
};

export default codeStringVariant;