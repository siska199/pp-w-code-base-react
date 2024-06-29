
interface TProps {
    title: string;
    subTitle: string | React.ReactNode;
}

const CardIntro = (props: TProps) => {
    const { title, subTitle } = props
    return (
        <div className=" ">
            <h4 className="font-bold mb-2  ">{title}</h4>
            <p className="text-justify max-w-full">{subTitle}</p>
        </div>
    )
}

export default CardIntro