
interface TProps {
    title: string;
    subTitle: string | React.ReactNode;
}

const CardIntro = (props: TProps) => {
    const { title, subTitle } = props
    return (
        <div className="">
            <h4 className="font-bold">{title}</h4>
            <p className="text-justify text-body-large max-w-full">{subTitle}</p>
        </div>
    )
}

export default CardIntro