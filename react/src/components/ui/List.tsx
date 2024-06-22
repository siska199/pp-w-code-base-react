import { TItemList } from "@types";
import Badge from "./Badge";

interface TProps {
    items: TItemList[];
    customeClass?: {
        ul?: string;
        li?: string;
    },
    title?: string;
}

const List = (props: TProps) => {
    const { title, items, customeClass } = props;

    const renderItems = (items: TItemList[]) => {
        return (

            <ul className={`${customeClass?.ul} ${title && "ml-1"} list-disc px-4 flex flex-col mt-2`}>
                {items.map((item, i) => (
                    <li key={i} className={`${customeClass?.li} ${item?.label ? 'mb-2' : 'mb-0'}`}>
                        {item.label && <Badge label={item.label} className="mr-2" />}
                        {item.content}
                        {item.childs && renderItems(item.childs)}
                    </li>
                ))}
            </ul>
        );
    };

    return <div>
        {
            title && <Badge label={title} variant={"soft-warning"} />
        }
        {renderItems(items)}
    </div>;
};

export default List;
