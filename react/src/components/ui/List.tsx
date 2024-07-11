import { TItemList } from "@types";
import Badge from "./Badge";
import variantBadge from "@lib/utils/variants/ui/variant-badge";
import { cn } from "@lib/utils/helper";

interface TProps {
  items: TItemList[];
  customeClass?: {
    ul?: string;
    li?: string;
    label?: string;
  };
  title?: string;
  variantBadge?: {
    [key: number]: keyof typeof variantBadge;
  };
  defaultIconLi? :  React.ReactNode;
  customeIconLi? :  {
    [key: number]: React.ReactNode;
  };
}

const List = (props: TProps) => {
  const { title, items, customeClass,defaultIconLi:defaultIconLiProp, variantBadge, customeIconLi,...attrs } = props;
  
  const defaultIconLi=defaultIconLiProp??"🌸"??<div className="w-[0.35rem] h-[0.35rem] mt-2 flex-shrink-0 bg-gray-500 rounded-[50%]"/>
  

  const renderItems = (items: TItemList[], level: number) => {
    return (
      <ul
        className={cn({
          "px-4 flex flex-col ": true,
          [customeClass?.ul || ""]: customeClass?.ul,
        })}
        {...attrs}
      >
        {items.map((item, i) => (
          <li key={i} className={cn({
            'mb-0 inline-flex gap-2':true,
            "my-1":item?.label,
            [customeClass?.li||'']:customeClass?.li,
          })}>
            {customeIconLi?.[level] ?? defaultIconLi}
            <div>
              {item.label && (
                <Badge
                label={item.label}
                variant={variantBadge?.[level] || "soft-primary"}
                className={cn({
                  "mr-2 ": true,
                  [customeClass?.label || ""]: customeClass?.label,
                })}
              />
              )}
              {item.content}
              {item.childs && renderItems(item.childs, level + 1)}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {title && <Badge label={title} variant={"soft-warning"} />}
      {renderItems(items, 0)}
    </div>
  );
};

export default List;
