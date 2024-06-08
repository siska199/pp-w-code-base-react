
interface TProps {
    title: string;
    subTitle: string;
}

const HeaderIntro = (props: TProps) => {
    const { title, subTitle } = props
    return (
        <div>
            <h4 className="font-bold">{title}</h4>
            <p className="text-justify text-body-large  max-w-full">{subTitle}</p>
        </div>
    )
}

export default HeaderIntro