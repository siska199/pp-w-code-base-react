import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const HelperComponentPage = () => {

    const listHelperComponent = [
        {
            title: 'Container.tsx',
            caption: <Container gap={"small"}>
                <p>The Container component is a versatile, highly customizable container for various layout configurations. It leverages the class-variance-authority (CVA) library to manage and apply a variety of CSS classes based on the provided props. This component is designed to offer flexible layout options using CSS flexbox properties, enabling developers to create consistent and reusable layouts.</p>
                <CodeBlock
                    fileName="src/components/ui/Container.tsx"
                    codeString={codeStringComponentUi.Container}
                />
                <List title={"Props"} items={listPropsContainer} />
            </Container>
        },
        {
            title: 'ContainerInput.tsx',
            caption: <div className="flex flex-col gap-2">
                <p>The ContainerInput component is a versatile wrapper designed to handle almost all types of input components. It simplifies the process of creating input fields by providing a common structure and handling various functionalities, such as clearing the input, toggling password visibility, and displaying error messages. This component helps ensure that input fields have a consistent look and feel across the application and reduces the need for repetitive code</p>
                <CodeBlock
                    fileName="src/components/ui/input/ContainerInput.tsx"
                    codeString={codeStringComponentUi?.ContainerInput}
                />
                <List title={"Props"} items={listPropsContainerInput} />
            </div>
        }
    ]

    return (
        <>
            <CardIntro
                title={'Helper Component'}
                subTitle={'Helper components are specialized components created to build other components. They encapsulate reusable logic and structures, allowing for more efficient and organized development. By providing common functionalities, helper components make the codebase more maintainable and consistent.'}
            />

            <ProgressStep type="number" variant="vertical" listStep={listHelperComponent} />
        </>

    );
};

const listPropsContainer = [
    {
        label: "children",
        content: "The content to be rendered inside the Container component.",
    },
    {
        label: "className",
        content: "Additional CSS classes to be applied to the Container component.",
    },
    {
        label: "variant",
        content: "Controls the flexbox layout variant of the Container. Options include: hcs, hcc, hce, hss, hsc, hse, hes, hec, hee, hbs, hbc, hbe, vcs, vcc, vce, vss, vsc, vse, ves, vec, vee. Defaults to 'vss'.",
    },
    {
        label: "gap",
        content: "Sets the gap between flex items in the Container. Options include: tiny, small, base, medium, large, xl. Defaults to 'base'.",
    },
    {
        label: "fit",
        content: "Determines whether the Container should fit its content width (`w-fit`) or stretch to full width (`w-full`). Defaults to `false`.",
    },
    {
        label: "padding",
        content: "Applies padding to the Container. Options include: small, base, medium, large, xl.",
    },
    {
        label: "typeComp",
        content: "Defines additional styles based on the type of component. Options include: page (for full-screen components) or card (for card-like components).",
    },
    {
        label: "customElement",
        content: "Allows specifying a custom HTML element type (`ul`, `nav`, `body`, `main`, `form`) for the Container. Defaults to `div`.",
    },
];
const listPropsContainerInput = [
    {
        label: "children",
        content: "Content to be rendered inside the ContainerInput component. This can be either a React node or a function that receives input attributes.",
    },
    {
        label: "disabled",
        content: "If true, disables the input field and styles it accordingly.",
    },
    {
        label: "name",
        content: "Specifies the name attribute of the input field.",
    },
    {
        label: "type",
        content: "Specifies the type attribute of the input field (e.g., 'text', 'password').",
    },
    {
        label: "onlyContainer",
        content: "If true, renders only the Container component without additional wrappers.",
    },
    {
        label: "isClerable",
        content: "If true, shows an IconClose component to clear the input field.",
    },
    {
        label: "value",
        content: "The current value of the input field.",
    },
    {
        label: "onChange",
        content: "Callback function invoked when the value of the input field changes.",
    },
    {
        label: "childrenOverlay",
        content: "Additional content to be rendered as an overlay inside the ContainerInput component.",
    },
    {
        label: "isNotUsingDefaultStyle",
        content: "An object with a boolean property 'input'. If true, disables default styling of the input field.",
    },
    {
        label: "onCustomeClearHandler",
        content: "Callback function invoked when the custom clear button (IconClose) is clicked.",
    },
    {
        label: "customeClearValue",
        content: "Custom value used for clearing the input field. Typically a string value.",
    },
    {
        label: "errorMessage",
        content: "This optional prop holds the error message related to the input field. It can be displayed to indicate validation or input errors.",
    },
    {
        label: "label",
        content: "Optional string prop that represents the label associated with the input field. Used for accessibility and visual clarity.",
    },
    {
        label: "variant",
        content: "A string literal union ('v1' | 'v2' | 'v3' | 'v4' | 'v5') that specifies different visual variants or styles for the input container. Each variant may have different styling or layout configurations.",
    },
    {
        label: "customeClass",
        content: "An object that allows custom CSS classes to be applied to specific elements within the component:",
    },
    {
        label: "customeClass.label",
        content: "Custom class for styling the label.",
    },
    {
        label: "customeClass.input",
        content: "Custom class for styling the input field.",
    },
    {
        label: "customeClass.ciV1, ciV2, ciV3, ciV4",
        content: "Custom classes for styling specific parts or variants of the container.",
    },
    {
        label: "customeElement",
        content: "An object for passing custom elements or content to enhance the ContainerInput component:",
    },
    {
        label: "customeElement.start",
        content: "React node or content to be placed at the start of the input container.",
    },
    {
        label: "customeElement.end",
        content: "React node or content to be placed at the end of the input container.",
    },
    {
        label: "customeElement.preStart",
        content: "Additional string attribute that can be used for styling or positioning before the start element.",
    },
    {
        label: "customeElement.preEnd",
        content: "Additional string attribute that can be used for styling or positioning after the end element.",
    },
];

export default HelperComponentPage;