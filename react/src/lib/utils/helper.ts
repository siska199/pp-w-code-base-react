import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const isEmptyValue = (value: any): boolean => {
    if (value === undefined || value === null || value === '') {
        return true;
    }
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return value.length === 0;
        }
        return Object.keys(value).length === 0;
    }
    return false;
};

interface TParamsSpreadArrayTemp {
    newValue: any;
    array: any[]
}

export const spreadArrayAttemp = (params: TParamsSpreadArrayTemp) => {
    const { newValue, array } = params

    return isEmptyValue(array) ? [newValue] : [...array, newValue]
}

export const isolateEvent = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation()
}