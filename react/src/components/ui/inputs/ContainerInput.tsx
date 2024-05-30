import Container from "@components/ui/Container";
import HelperMessage from "@components/ui/HelperMessage";
import clsx from "clsx";
import { TBasePropsInput } from '@/types/ui/index';

interface TProps<TInput,>  extends TBasePropsInput  {
    children    : (attrsInput :TInput)=>React.ReactNode;
    disabled?    : boolean;
    name?        : string;
}

const ContainerInput = <TInput,>(props: TProps<TInput>) => {

    
    const { children, label, variant="v1", errorMessage,customeElement,disabled,name,customeClass, ...attrsInput } = props;

    const className = clsx({
        "peer w-full flex-grow !outline-none !border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-400": true,
        "!bg-disabled": disabled,
        [customeClass?.input||'']:customeClass?.input
    })
    return (
        <>
            {/* Container input lv1 : ciV4 */}
            <Container gap={"tiny"}>
                {/* Container input lv1 : ciV3 */}
                <section className="relative flex flex-col gap-1 w-full"> 
                    {label && variant !== "v2" && (
                        <label htmlFor={name} className={clsx({
                            "font-medium": true,
                            "absolute top-[-0.65rem] left-[0.45rem] text-body-small bg-white px-1 z-[10]": variant === "v4"
                        })}>{label}</label>
                    )}
                    {/* Container input lv1 : ciV2 */}
                    <div className={clsx(
                        "bg-white flex flex-nowrap items-center gap-2 text-body-base border border-input rounded-lg focus-within:ring-4 focus-within:ring-primary-200 focus-within:!border-primary w-full px-3 py-2",
                        {
                            "!bg-disabled !border": disabled,
                            "border-error focus-within:!ring-error-200 focus-within:!border-error": errorMessage,
                            "!rounded-[5rem]": variant === "v3",
                            "!border-t-0 !border-l-0 !border-r-0 !rounded-none focus-within:!ring-0": variant === "v5",
                            [customeClass?.ciV2||""]:customeClass?.ciV2
                        }
                    )}>
                        {customeElement?.start}
                        {/* Container input lv1 : ciV1 */}
                        <div className="w-full relative">
                        {children({...attrsInput as TInput,className})}
                            {label && variant === "v2" && (
                                <label
                                    id="floating-label"
                                    htmlFor={name}
                                    className={clsx(
                                        {
                                            "font-medium peer-focus:ml-[-0.25rem] absolute left-0 text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:bg-white peer-focus:px-1 z-10": true,
                                            [customeClass?.label || "peer-focus:!ml-[-30px]"]: customeElement?.start
                                        }
                                    )}
                                >
                                    {label}
                                </label>
                            )}
                        </div>
                        {customeElement?.end}
                    </div>
                </section>
                <HelperMessage variant={"error"} message={errorMessage} />
            </Container>
        </>
    );
}

export default ContainerInput;
