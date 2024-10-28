import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function bytesToMegabytes(bytes: number): number {
  return bytes / (1024 * 1024);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmptyValue(value: any): boolean {
  if (value === undefined || value === null || value === "") {
    return true;
  }
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return Object.keys(value).length === 0;
  }
  return false;
}

interface TParamsSpreadArrayTemp {
  newValue: any;
  array: any[];
}
export function spreadArrayAttemp(params: TParamsSpreadArrayTemp) {
  const { newValue, array } = params;

  return isEmptyValue(array) ? [newValue] : [...array, newValue];
}

interface TParamsFieldFromObjectList {
  array: any[];
  fieldNameTarget: string;
  fieldNameValue: string;
  value: any;
}
export function getFieldFromObjectList(params: TParamsFieldFromObjectList) {
  const { array, fieldNameTarget, fieldNameValue, value } = params;
  return array?.filter((data) => data?.[fieldNameValue] === value)?.[0]?.[fieldNameTarget];
}

export function getFieldLabelFromOptions(params: Pick<TParamsFieldFromObjectList, "array" | "value">) {
  const { array, value } = params;
  return array?.filter((data) => data?.value === value)?.[0]?.label;
}

interface TParamsGetAssetURl {
  name: string;
  folder?: "images" | "icons";
}

export function getAssetURL(params: TParamsGetAssetURl) {
  const { name, folder = "images" } = params;
  return new URL(`../../assets/${folder}/${name}`, import.meta.url)?.href;
}

export function checkVisibleElmnInScreen(elm: any) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export function checkElmnOnTopOfPage(elm: any) {
  const rect = elm.getBoundingClientRect();
  return rect.top === 0;
}

export function handleStopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  return e?.stopPropagation();
}
export function handlePreventDefault(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  return e?.preventDefault();
}

export function arraysHaveSameMembers(array1: string[], array2: string[]) {
  if (array1.length !== array2.length) {
    return false; // Arrays have different lengths, so they can't have the same members
  }

  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();

  return sortedArray1.every((value, index) => value === sortedArray2[index]);
}

export function generateDisplayComponent(ComponentName: string, dynamic: string) {
  return `import ${ComponentName} from "@components/ui/${ComponentName}";
    
const DisplayComponent = () => {
    ${dynamic}
};`;
}

export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function findLargestIndexWithValue(arr: any[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null && arr[i] !== "" && arr[i] !== undefined) {
      return i;
    }
  }
  return -1;
}

export function findSmallestIndexWithEmptyValue(arr: any[]) {
  return arr.findIndex((value) => !value);
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function truncateName(name: string, tooltipWidth: number) {
  const maxLength = tooltipWidth / 8;
  return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
}
