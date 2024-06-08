
interface TProps {
    title: string;
}

const HeaderSubMenu = (props: TProps) => {
    const { title } = props
    return (
        <h5 className='text-body-3xl border-b mb-4 w-full font-bold pb-2'>
            {title}
        </h5>
    )
}

export default HeaderSubMenu