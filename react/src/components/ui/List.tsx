import { TItemList } from "@types";
import Badge from "./Badge";

interface TProps {
    items: TItemList[];
}

const List = (props: TProps) => {
    const { items } = props;

    const renderItems = (items: TItemList[]) => {
        return (
            <ul className="list-disc px-4 flex flex-col gap-2 mt-2">
                {items.map((item, i) => (
                    <li key={i}>
                        {item.label && <Badge label={item.label} />}
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
