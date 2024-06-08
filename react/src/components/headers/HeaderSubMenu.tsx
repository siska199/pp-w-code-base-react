
interface TProps {
    title: string;
}

const HeaderSubMenu = (props: TProps) => {
    const { title } = props
    return (
        <h5 className='border-b  w-full font-semibold pb-2'>
            {title}
        </h5>
    )
}

export default HeaderSubMenu