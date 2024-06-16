
interface TProps<TV, TG=string> {
    variant: TV;
    groups: TG[];
    Component: (variant: keyof TV, group:TG) => React.ReactNode;
    customeClass?: {
        container?: string;
        containerGroupVariant?: string;
        containerCardVariant? : string;
    }
}

const ShowVariousCompVariant = <TV extends object,TG extends string=string>(props: TProps<TV,TG>) => {
    const { variant, groups, Component, customeClass } = props


    return (
        <div className={`${customeClass?.container} flex flex-wrap gap-8`}>
            {
                groups?.map((group, i) => <div key={i} className={`${customeClass?.containerGroupVariant} flex flex-col gap-2 `}>
                    <p className="font-medium text-black">{group}</p>
                    <div className="flex flex-wrap gap-2 ">
                        {
                            Object.entries(variant)?.filter(([key]) => {
                                const groupKey = key?.split('-')[0]
                                return groupKey === group
                            })?.map(([key,]) => {
                                return <div key={key} className={`${customeClass?.containerCardVariant} flex flex-col gap-1 items-center border p-2 rounded-md min-w-[6rem] md:min-w-[8rem]`}>
                                    {Component(key as keyof TV, group)}
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
