import { TItemList } from "@types";
import Badge from "./Badge";

interface TProps {
    items: TItemList[];
    customeClass?: {
        ul?: string;
        li?: string;
    }
}

const List = (props: TProps) => {
    const { items, customeClass } = props;

    const renderItems = (items: TItemList[]) => {
        return (
            <ul className={`${customeClass?.ul} list-disc px-4 flex flex-col gap-3 mt-2`}>
                {items.map((item, i) => (
                    <li key={i} className={`${customeClass?.li} `}>
                        {item.label && <Badge label={item.label} className="mr-2" />  }
                        {item.content}
                        {item.childs && renderItems(item.childs)}
                    </li>
                ))}
            </ul>
        );
    };

    return <>{renderItems(items)}</>;
};

export default List;
