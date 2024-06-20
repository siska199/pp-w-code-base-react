import clsx from "clsx";

interface TProps {
    text: string;
    width: string;
    customeClassText?: string;

}

const DividerCenterText = (props: TProps) => {
    const { text, width, customeClassText } = props
    return (
        <div className="relative flex py-5 items-center w-full">
            <div style={{ width }} className="flex-grow border-t "></div>
            <span className={clsx({
                "flex-shrink mx-4 text-gray": true,
                [customeClassText || ""]: customeClassText
            })}>{text}</span>
            <div style={{ width }} className="flex-grow border-t "></div>
        </div>
    )
}

export default DividerCenterText