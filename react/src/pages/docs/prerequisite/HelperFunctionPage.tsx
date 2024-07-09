import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import { TItemList } from "@types";

const HelperFunctionPage = () => {

    const listHelper = [
        {
            title: <div id="cn">cn</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction.cn,
                purposeDescrition: 'Combines multiple class names into a single string, merging Tailwind CSS class names if necessary.',
                listParameter: [
                    { label: '...inputs', content: ': ClassValue[] - A list of class values.' }
                ],
                returnDescription: 'A single string with combined class names.'
            })
        },
        {
            title: <div id="isEmptyValue">isEmptyValue</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction.isEmptyValue,
                purposeDescrition: 'Checks if a value is empty.',
                listParameter: [
                    { label: 'value: any', content: 'The value to check.' }
                ],
                returnDescription: 'A boolean indicating if the value is empty.'
            })
        },
        {
            title: <div id="spreadArrayAttemp">spreadArrayAttemp</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction.spreadArrayAttemp,
                purposeDescrition: 'Adds a new value to an array, creating a new array if the original is empty.',
                listParameter: [
                    { label: 'params: TParamsSpreadArrayTemp', content: 'An object containing the new value and the array.' }
                ],
                returnDescription: 'A new array with the added value.'
            })
        },
        {
            title: <div id="getFieldFromObjectList">getFieldFromObjectList</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction?.getFieldFromObjectList,
                purposeDescrition: 'Retrieves a field value from an object list based on a matching field value.',
                listParameter: [
                    { label: 'params: TParamsFieldFromObjectList', content: 'An object containing the array, target field name, value field name, and value to match.' }
                ],
                returnDescription: 'The value of the target field from the matched object.'
            })
        },
        {
            title: <div id='getFieldLabelFromOptions'>getFieldLabelFromOptions</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction?.getFieldLabelFromOptions,
                purposeDescrition: 'Retrieves the label of an option from a list based on a matching value.',
                listParameter: [
                    { label: 'params: Pick<TParamsFieldFromObjectList, "array" | "value"> ', content: 'An object containing the array and value to match.' }
                ],
                returnDescription: 'The label of the matched option.'
            })
        },
        {
            title: <div id='getAssetURL'>getAssetURL</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction?.getAssetURL,
                purposeDescrition: 'Generates a URL for an asset file located in the specified folder.',
                listParameter: [
                    { label: 'params: TParamsGetAssetURl', content: 'An object containing the asset name and optional folder (default is "images").' }
                ],
                returnDescription: 'The URL of the asset file.'
            })
        },
        {
            title: <div id='checkVisibleElmnInScreen'>checkVisibleElmnInScreen</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction.checkElmnOnTopOfPage,
                purposeDescrition: 'Checks if an element is visible within the viewport.',
                listParameter: [
                    { label: 'elm: any ', content: 'The element to check.' }
                ],
                returnDescription: 'A boolean indicating if the element is visible.'
            })
        },
        {
            title: <div id='checkElmnOnTopOfPage'>checkElmnOnTopOfPage</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction.checkElmnOnTopOfPage,
                purposeDescrition: 'Checks if an element is at the top of the page.',
                listParameter: [
                    { label: 'elm: any ', content: ' The element to check.' }
                ],
                returnDescription: 'A boolean indicating if the element is at the top of the page.'
            })
        },
        {
            title: <div id='handleStopPropagation'>handleStopPropagation</div>,
            caption: generateCaptionListItemFunction({
                codeString: `export const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e?.stopPropagation();`,
                purposeDescrition: 'Stops the propagation of an event.',
                listParameter: [
                    { label: 'e: React.MouseEvent<HTMLDivElement, MouseEvent>', content: 'The event to stop propagation for.' }
                ],
                returnDescription: 'None.'
            })
        },
        {
            title: <div id='generateDisplayComponent'>generateDisplayComponent</div>,
            caption: generateCaptionListItemFunction({
                codeString: codeStringFunction?.generateDisplayComponent,
                purposeDescrition: 'Generates a display component string based on the provided component name and dynamic content.',
                listParameter: [
                    { label: 'ComponentName: string', content: 'The name of the component to import and display.' },
                    { label: 'dynamic: string', content: 'The dynamic content to include in the component.' }
                ],
                returnDescription: 'A string representing the display component.'
            })
        }
    ];


    return (
        <div className="flex flex-col gap-3">
            <CardIntro
                title={'Helper Function'}
                subTitle={<>A helper.js file is typically used in a project to store utility functions that can be reused across different parts of the application.</>}
            />
            <ProgressStep type="number" listStep={listHelper} variant="vertical" />
        </div>
    );
};


interface TParamsGenerateItemFunction {
    codeString: string;
    purposeDescrition: string;
    listParameter: TItemList[];
    returnDescription: string;
}

const codeStringFunction = {
    cn: `import clsx, { ClassValue } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\nexport const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));\n`,
    isEmptyValue: `export const isEmptyValue = (value: any): boolean => {\n    if (value === undefined || value === null || value === '') {\n        return true;\n    }\n    if (typeof value === 'object') {\n        if (Array.isArray(value)) {\n            return value.length === 0;\n        }\n        return Object.keys(value).length === 0;\n    }\n    return false;\n};`,
    spreadArrayAttemp: `interface TParamsSpreadArrayTemp {\n    newValue: any;\n    array: any[]\n}\nexport const spreadArrayAttemp = (params: TParamsSpreadArrayTemp) => {\n    const { newValue, array } = params;\n    return isEmptyValue(array) ? [newValue] : [...array, newValue];\n}\n\nexport const isolateEvent = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>) => {\n    e?.preventDefault();\n    e?.stopPropagation();\n};`,
    getFieldFromObjectList: `interface TParamsFieldFromObjectList {\n    array: any[];\n    fieldNameTarget: string;\n    fieldNameValue: string;\n    value: any;\n}\nexport const getFieldFromObjectList = (params: TParamsFieldFromObjectList) => {\n    const { array, fieldNameTarget, fieldNameValue, value } = params;\n    return array?.filter(data => data?.[fieldNameValue] === value)?.[0]?.[fieldNameTarget];\n};`,
    getFieldLabelFromOptions: `interface TParamsFieldFromObjectList {\n    array: any[];\n    fieldNameTarget: string;\n    fieldNameValue: string;\n    value: any;\n}\nexport const getFieldLabelFromOptions = (params: Pick<TParamsFieldFromObjectList, "array" | "value">) => {\n    const { array, value } = params;\n    return array?.filter(data => data?.value === value)?.[0]?.label;\n};`,
    generateDisplayComponent: `export function generateDisplayComponent(ComponentName: string, dynamic: string) {\n    return \`import \${ComponentName} from "@components/ui/\${ComponentName}";\n    \n    const DisplayComponent = () => {\n        \${dynamic};\n    };\`;\n};`,
    getAssetURL: `interface TParamsGetAssetURl {\n    name: string;\n    folder?: 'images' | 'icons'\n}\n\nexport const getAssetURL = (params: TParamsGetAssetURl) => {\n    const { name, folder = 'images' } = params;\n    return new URL(\`../../assets/\${folder}/\${name}\`, import.meta.url)?.href;\n};`,
    checkVisibleElmnInScreen: `export function checkVisibleElmnInScreen(elm: any) {\n    const rect = elm.getBoundingClientRect();\n    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);\n    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);\n};`,
    checkElmnOnTopOfPage: `export function checkElmnOnTopOfPage(elm: any) {\n    const rect = elm.getBoundingClientRect();\n    return rect.top === 0;\n};`,
};


const generateCaptionListItemFunction = (params: TParamsGenerateItemFunction) => <Container gap={"small"}>

    <CodeBlock
        codeString={params?.codeString}
    />
    <List
        items={[

            {
                label: 'Purpose',
                content: params?.purposeDescrition
            },
            {
                label: 'Parameters',
                content: '',
                childs: params?.listParameter
            },
            {
                label: 'Returns',
                content: params?.returnDescription
            }

        ]}
        variantBadge={{
            1: 'outline-gray'
        }}
    />

</Container>

export default HelperFunctionPage;