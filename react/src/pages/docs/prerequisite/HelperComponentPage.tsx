import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const HelperComponentPage = () => {

    const listHelperComponent = [
        {
            title: 'Container.tsx',
            caption: <div className="flex flex-col gap-2">
                <p>The Container component is a versatile, highly customizable container for various layout configurations. It leverages the class-variance-authority (CVA) library to manage and apply a variety of CSS classes based on the provided props. This component is designed to offer flexible layout options using CSS flexbox properties, enabling developers to create consistent and reusable layouts.</p>
                <CodeBlock
                    fileName="src/components/ui/Container.tsx"
                    codeString={`import { cn } from '@lib/utils/helper';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';


const containerFlexVariants = cva(
  'flex w-full flex-wrap md:flex-nowrap ',
  {
    variants : {
      variant : {
        hcs : 'flex justify-center items-start',
        hcc : 'flex justify-center items-center',
        hce : 'flex justify-center items-end',
        hss : 'flex justify-start items-start',
        hsc : 'flex justify-start items-center',
        hse : 'flex justify-start items-end',
        hes : 'flex justify-start items-start',
        hec : 'flex justify-start items-center',
        hee : 'flex justify-start items-end',
        hbs : 'flex justify-between items-start',
        hbc : 'flex justify-between items-center',
        hbe : 'flex justify-between items-end',
        vcs : 'flex-col items-center justify-start',
        vcc : 'flex-col items-center justify-center',
        vce : 'flex-col items-center justify-end',
        vss : 'flex-col items-start justify-start',
        vsc : 'flex-col items-start justify-center',
        vse : 'flex-col items-start justify-end',
        ves : 'flex-col items-end justify-start',
        vec : 'flex-col items-end justify-center',
        vee : 'flex-col items-end justify-end',
      },
      fit : {
        "true" : "w-fit",
        "false" : "w-full"
      },
      gap : {
        'tiny'   : "gap-1",
        'small'   : "gap-2",
        'base'    : "gap-4",
        'medium'  : "gap-6",
        'large'   : "gap-8",
        'xl' : "gap-16"     
      },

      padding : {
        'small'   : "p-2 w-[calc(100%-0.50rem)]",
        'base'    : "p-4 w-[calc(100%-1rem)]",
        'medium'  : "p-6 w-[calc(100%-1.5rem)]",
        'large'   : "p-8 w-[calc(100%-2rem)]",
        'xl' : "p-16 w-[calc(100%-4rem)]"         
      },
      typeComp : {
        'page' : 'min-h-screen h-screen',
        'card' : 'p-4'
      }
    },
    compoundVariants : [ 
    ],
    defaultVariants : {
      variant : 'vss',
      fit     : false,
    }
  }
)


interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof containerFlexVariants> {
  children      : React.ReactNode;
  customElement?: "ul" | "nav" | "body"  | "main" | 'form'
}


const Container : React.FC<TProps> = (props) => {
  const {children, className, variant,gap, fit, padding,  typeComp , customElement, ...attrs} = props
  const Component  = customElement ?? 'div'  as React.ElementType
  return (
    <Component className={cn(containerFlexVariants({ className,variant, gap, fit, padding,typeComp}))} {...attrs}>
      {children}
    </Component>
  )
}



export default Container`}
                />
            </div>
        },
        {
            title: 'ContainerInput.tsx',
            caption: <div className="flex flex-col gap-2">
                <p>The ContainerInput component is a versatile wrapper designed to handle almost all types of input components. It simplifies the process of creating input fields by providing a common structure and handling various functionalities, such as clearing the input, toggling password visibility, and displaying error messages. This component helps ensure that input fields have a consistent look and feel across the application and reduces the need for repetitive code</p>
                <CodeBlock
                    fileName="src/components/ui/input/ContainerInput.tsx"
                    codeString={`import { TBasePropsInput } from '@/types/ui/index';
import { IconClose, IconEye, IconEyeClose } from "@assets/icons";
import Container from "@components/ui/Container";
import HelperMessage from "@components/ui/HelperMessage";
import { isEmptyValue } from '@lib/utils/helper';
import clsx from "clsx";
import { useState } from "react";

interface TProps<TInput,> extends TBasePropsInput {
    children: React.ReactNode | ((attrsInput: TInput) => React.ReactNode);
    disabled?: boolean;
    name?: string;
    type?: string;
    onlyContainer?: boolean;
    isClerable?: boolean;
    value?: any;
    onChange?: (e: any) => void;
    childrenOverlay?: React.ReactNode;
    isNotUsingDefaultStyle?: {
        input?: boolean
    };
    onCustomeClearHandler?: () => void;
    customeClearValue? : string
}


//Description Variant:
// v1 : 
// v2 :
// v3 :

const ContainerInput = <TInput,>(props: TProps<TInput>) => {
    const { name, children, onCustomeClearHandler,customeClearValue, isNotUsingDefaultStyle, childrenOverlay, label, variant = "v1", isClerable = false, type, onlyContainer = false, errorMessage, customeElement, disabled, customeClass, value, onChange, ...attrsInput } = props;
    const [dynamicType, setDynamicType] = useState(type)

    const className = clsx({
        "peer w-full shrink !outline-none border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-400": !isNotUsingDefaultStyle?.input,
        "!bg-disabled": disabled,
        [customeClass?.input || '']: customeClass?.input,
        "px-4": customeElement?.preEnd,
        "pr-4 pl-1":customeElement?.preStart
    })

    const handleToggleTypePassword = () => {
        setDynamicType(dynamicType === "password" ? "text" : "password")
    }

    const handleOnClearValue = () => {

        onCustomeClearHandler ? onCustomeClearHandler() : onChange && onChange({
            target: {
                name: name || "",
                value: Array.isArray(value) ? [] : ""
            }
        })
    }


    return (
        <>
            {/* Container input lv1 : ciV4 */}
            <Container className={\`\${customeClass?.ciV4} relative flex flex-col gap-2\`}>
                {/* Container input lv1 : ciV3 */}
                <section className={\`\${customeClass?.ciV3} flex flex-col gap-2 w-full\`}>
                    {label && variant !== "v2" && (
                        <label htmlFor={name} className={clsx({
                            "font-medium": true,
                            "absolute top-[-0.65rem] left-[0.45rem] text-body-small bg-white px-1 z-[10]": variant === "v4"
                        })}>{label}</label>
                    )}
                    {/* Container input lv1 : ciV2 */}
                    {
                        onlyContainer && typeof (children) !== "function" ? children : <div className={clsx(
                            "bg-white flex flex-nowrap items-center gap-2 text-body-base border border-input rounded-lg focus-within:ring-4  w-full ",
                            {
                                "!bg-disabled !border": disabled,
                                "focus-within:ring-primary-200 focus-within:!border-primary":!errorMessage,
                                "border-error focus-within:!ring-error-200 focus-within:!border-error": errorMessage,
                                "!rounded-[5rem]": variant === "v3",
                                "!border-t-0 !border-l-0 !border-r-0 !rounded-none focus-within:!ring-0": variant === "v5",
                                [customeClass?.ciV2 || ""]: customeClass?.ciV2,
                                "px-3 py-2 " : !customeElement?.preStart && !customeElement?.preEnd,
                                "overflow-hidden" : customeElement?.preStart || customeElement?.preEnd,
                            }
                        )}>
                            {
                                customeElement?.preStart&& <div className={clsx({
                                    "hidden": true,
                                    "shrink-0 !flex bg-gray-100 p-2 ": customeElement?.preStart,
                                })} >
                                    {customeElement?.preStart}
                                </div>
                            }
                           
                            <div className={clsx({
                                "hidden": true,
                                "shrink-0 !flex ": customeElement?.start,
                            })} >
                                {customeElement?.start}
                            </div>

                            {/* Container input lv1 : ciV1 */}
                            <div className={\`flex flex-col w-full relative \${customeClass?.ciV1}\`}>
                                {
                                    typeof (children) === "function" ? <>
                                        {children({ ...attrsInput as TInput, className, name, type: dynamicType, disabled, value, onChange })}
                                        {label && variant === "v2" && (
                                            <label
                                                id="floating-label"
                                                htmlFor={name}
                                                className={clsx(
                                                    {
                                                        "font-medium absolute left-0 text-sm text-gray duration-300 transform -translate-y-5 bg-white px-1 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:bg-white  z-10": true,
                                                        [customeClass?.label || "peer-placeholder-shown:ml-[0px] peer-focus:ml-[-35px] ml-[-35px]"]: customeElement?.start,
                                                        "ml-[-0.25rem] ": !customeElement?.start
                                                    }
                                                )}
                                            >
                                                {label}
                                            </label>
                                        )}
                                    </> : children

                                }

                            </div>
                            {isClerable && !isEmptyValue(customeClearValue) && <IconClose className='cursor-pointer' onClick={handleOnClearValue} />}
                            
                            <div className={clsx({
                                "hidden": true,
                                "shrink-0 !flex": customeElement?.end
                            })} >
                                {customeElement?.end}
                            </div>
                            {
                                customeElement?.preEnd&& <div className={clsx({
                                    "hidden": true,
                                    "shrink-0 !flex bg-gray-100 p-2 ": customeElement?.preEnd,
                                })} >
                                    {customeElement?.preEnd}
                                </div>
                            }
                            {type === "password" && <div onClick={handleToggleTypePassword} className="cursor-pointer-custome ">
                                {
                                    dynamicType === "password" ? <IconEye /> : <IconEyeClose />
                                }
                            </div>}
                        </div>
                    }
                </section>
                {childrenOverlay}
                <HelperMessage variant={"error"} message={errorMessage} />
            </Container>
        </>
    );
}

export default ContainerInput;`}
                />
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

export default HelperComponentPage;