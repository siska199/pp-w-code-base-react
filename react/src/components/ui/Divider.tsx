import clsx from "clsx";

interface TProps {
    variant? : "left-aligned" | 'center-aligned' |'right-aligned';
    text: string;
    width: string;
    customeClass?: {
        text? : string;

    }

}

const Divider = (props: TProps) => {
    const { variant='center-aligned' , text, width, customeClass } = props
    return (
        <div className="relative flex py-5 items-center w-full">
            {
                ["right-aligned", 'center-aligned']?.includes(variant)&&<div style={{ width }} className="flex-grow border-t "></div>
            }
            <span className={clsx({
                "flex-shrink mx-4 text-gray": true,
                [customeClass?.text || ""]: customeClass?.text
            })}>{text}</span>
            {
                ["left-aligned", 'center-aligned']?.includes(variant)&&<div style={{ width }} className="flex-grow border-t "></div>
            }
            
        </div>
    )
}

export default Divider