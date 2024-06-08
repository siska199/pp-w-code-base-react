
interface TProps {
    title: string;
    subTitle: string;
}

const HeaderIntro = (props: TProps) => {
    const { title, subTitle } = props
    return (
        <div>
            <h4 className="font-bold">{title}</h4>
            <p className="text-justify text-body-medium text-gray">{subTitle}</p>
        </div>
    )
}

export default HeaderIntro