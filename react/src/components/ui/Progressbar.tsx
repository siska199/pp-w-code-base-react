
interface TProps {
    value: number;
    valueTotal: number;
    customeClass?: {
        container?: string;
        containerProgressbar?: string;
        progressbar?: string;
        containerLabel?: string;
        label?: string;
    };
    size?: "small" | "base"
}

const Progressbar = (props: TProps) => {
    const { value, valueTotal, customeClass, size = "base" } = props;
    const percentage = (value / valueTotal) * 100

    // >>-Animation Progress bar
    // const [width, setWidth] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const nextWidth = width + 10;
    //         if (nextWidth <= 100) {
    //             setWidth(nextWidth);
    //         } else {
    //             setWidth(0);
    //         }
    //     }, 500); 

    //     return () => clearInterval(interval);
    // }, [width, valueTotal]); 

    return (
        <div className={`${customeClass?.container} `}>
            <label className={`${customeClass?.label} `}>
                {percentage}%
            </label>
            <div className={`bg-gray-100 w-full rounded-full min-w-[5rem] ${size === "small" ? "h-[8px]" : "h-[16px]"} ${customeClass?.containerProgressbar}`} >
                <div
                    style={{ width: `${percentage}%` }}
                    className={`bg-primary text-center text-white h-full transition-all duration-300 rounded-full ${customeClass?.progressbar}`}
                >
                </div>
            </div>
        </div>
    );
}

export default Progressbar;
