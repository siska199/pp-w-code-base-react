
interface TProps<TV> {
    variant: TV;
    groups: string[];
    Component: (variant: keyof TV) => React.ReactNode;
    customeClass?: {
        container?: string;
        containerGroupVariant?: string;
    }
}

const ShowVariousCompVariant = <TV extends object,>(props: TProps<TV>) => {
    const { variant, groups, Component, customeClass } = props


    return (
        <div className={`${customeClass?.container} flex flex-wrap gap-8 items-center`}>
            {
                groups?.map((group, i) => <div key={i} className={`${customeClass?.containerGroupVariant} flex flex-col gap-2 `}>
                    <p className="font-medium text-black">{group}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                        {
                            Object.entries(variant)?.filter(([key]) => {
                                const groupKey = key?.split('-')[0]

                                return groupKey === group
                            })?.map(([key,]) => {
                                return <div key={key} className="flex flex-col gap-1 items-center border p-2 rounded-md min-w-[8rem]">
                                    {Component(key as keyof TV)}
                                    <p className="text-body-tiny">{key}</p>
                                </div>
                            })
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default ShowVariousCompVariant;
