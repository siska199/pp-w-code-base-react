import CardVariantComp from "@components/cards/CardVariantComp";

interface TProps<TV, TG = string> {
    variant: TV;
    groups: TG[];
    Component: (variant: keyof TV, group: TG) => React.ReactNode;
    customeClass?: {
        container?: string;
        containerGroupVariant?: string;
        containerCardVariant?: string;
    };
    withBorder?: boolean;
    isLogicSplitGroupKey?: boolean;
    withGroupName?: boolean;
}

const CardVariousCompVariant = <TV extends object, TG extends string = string>(props: TProps<TV, TG>) => {
    const { variant, withGroupName = true, withBorder = true, isLogicSplitGroupKey = true, groups, Component, customeClass } = props


    return (
        <div className={`${customeClass?.container} flex flex-wrap gap-2`}>
            {
                groups?.map((group, i) => <div key={i} className={`${customeClass?.containerGroupVariant} flex flex-col gap-2 `}>
                    {withGroupName && <p className="font-medium text-black">{group}</p>}
                    <div className="flex flex-wrap gap-2 ">
                        {
                            Object.entries(variant)?.filter(([key]) => {
                                const groupKey = isLogicSplitGroupKey ? key?.split('-')[0] : key?.split(' ')[0]
                                return groupKey === group
                            })?.map(([key,]) => {
                                return <CardVariantComp
                                    key={key}
                                    Component={Component(key as keyof TV, group)}
                                    title={key}
                                    withBorder={withBorder}
                                    customeClass={{
                                        container: customeClass?.containerCardVariant
                                    }}
                                />
                            })
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default CardVariousCompVariant;
