import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import codeStringStyle from "@lib/utils/code-string/style";

const CSSFilePage = () => {


    const listCSSFile = [
        {
            title: <div id="index.css">File <Badge label="index.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles</span></div>,
            caption: <CodeBlock
                fileName="styles/index.css"
                codeString={codeStringStyle.index}
            />
        },
        {
            title: <>File <Badge label="input.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock
                fileName="styles/ui/input.css"
                codeString={codeStringStyle?.input}
            />
        },
        {
            title: <>File <Badge label="modal.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock
                fileName="styles/ui/modal.css"
                codeString={codeStringStyle.modal} />
        },
        {
            title: <>File <Badge label="progress-step.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/progress-step.css"
                codeString={codeStringStyle?.progressStep} />
        },
        {
            title: <>File <Badge label="table.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/table.css"
                codeString={codeStringStyle?.table} />
        },
        {
            title: <>File <Badge label="tooltip.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/tooltip.css" codeString={codeStringStyle.tooltip} />
        }
    ]
    return (
        <Container gap={"base"}>
            <CardIntro
                title={'CSS File'}
                subTitle={<div className="text-body-small">
                    <p >The CSS files provided contain various styles and configurations tailored for different components and effects in a web application. Let&#39;s summarize each CSS file briefly:</p>
                    <List
                        items={[
                            {
                                label: "index.css",
                                content: "This file is imported in several other CSS files and likely contains global styles and utility classes shared across the application."
                            },
                            {
                                label: "tooltip.css",
                                content: 'Defines styles for tooltips',
                                childs: [
                                    {
                                        content: 'Positions tooltips relative to their parent elements (top, bottom, left, right).'
                                    },
                                    {
                                        content: 'Applies visibility changes on hover.'
                                    },
                                    {
                                        content: 'Uses pseudo-elements (::after) for arrow-like indicators.'
                                    },
                                    {
                                        content: 'Sets specific styles for tooltip text background and appearance.'
                                    }
                                ]
                            },
                            {
                                label: 'table.css',
                                content: 'Styles for tables: ',
                                childs: [
                                    {
                                        content: 'Utilizes @import to include index.css.'
                                    },
                                    {
                                        content: 'Defines different styles for checked columns (column-checked) and data columns (column-data).'
                                    },
                                    {
                                        content: 'Likely includes styles for responsive and interactive table components.'
                                    }
                                ]
                            },
                            {
                                label: 'progress-step.css',
                                content: 'Styles for progress steps: ',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Defines styles for horizontal (stepper-item.horizontal) and vertical (stepper-item.vertical) progress steps.'
                                    },
                                    {
                                        content: 'Includes effects for completed and active steps.'
                                    },
                                    {
                                        content: 'Uses pseudo-elements (::after) for step indicators.'
                                    }
                                ]
                            },
                            {
                                label: 'model.css',
                                content: 'Styles for modal overlays: ',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Sets up modal overlay (md-overlay) and modal content (md-content) styles.'
                                    },
                                    {
                                        content: 'Includes effects for modal visibility (md-show) and transitions.'
                                    },
                                    {
                                        content: 'Configures different modal effects (md-effect-1, md-effect-2, md-effect-3) with various transitions and transformations.'
                                    }
                                ]
                            },
                            {
                                label: 'input.css',
                                content: 'Styles for input elements:',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Customizes input fields, including autofill background removal, number inputs, radio buttons, and date pickers (react-datepicker).'
                                    },
                                    {
                                        content: 'Defines styles for different states of radio buttons and input components.'
                                    }
                                ]
                            },
                        ]}
                    />
                    <p className="indent-[2rem]">
                        Each CSS file encapsulates specific styling rules and effects tailored for different UI components like tooltips, tables, progress steps, modals, and form inputs. They make extensive use of Tailwind CSS utility classes (@apply) to apply styles consistently and efficiently across the application. These styles collectively contribute to a cohesive and visually appealing user interface.
                    </p>
                </div>}
            />
            <ProgressStep type="number" listStep={listCSSFile} variant="vertical" />
        </Container>
    );
};

export default CSSFilePage;