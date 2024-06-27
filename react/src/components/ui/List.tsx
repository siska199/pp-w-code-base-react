import { TItemList } from "@types";
import Badge from "./Badge";
import variantBadge from "@lib/utils/variants/ui/variant-badge";

interface TProps {
    items: TItemList[];
    customeClass?: {
        ul?: string;
        li?: string;
    },
    title?: string;
    variantBadge?:{
        [key:number]:keyof typeof variantBadge
    }
}

const List = (props: TProps) => {
    const { title, items, customeClass,variantBadge } = props;

    const renderItems = (items: TItemList[],level:number) => {
        return (

            <ul className={`${customeClass?.ul} ${title && "ml-4"} list-disc px-4 flex flex-col mt-2`}>
                {items.map((item, i) => (
                    <li key={i} className={`${customeClass?.li} ${item?.label ? 'mb-2' : 'mb-0'}`}>
                        {item.label && <Badge label={item.label} variant={variantBadge?.[level]||'soft-primary'} className="mr-2" />}
                        {item.content}
                        {item.childs && renderItems(item.childs, level+1)}
                    </li>
                ))}
            </ul>
        );
    };

    return <div>
        {
            title && <Badge label={title} variant={"soft-warning"} />
        }
        {renderItems(items, 0)}
    </div>;
};

export default List;
