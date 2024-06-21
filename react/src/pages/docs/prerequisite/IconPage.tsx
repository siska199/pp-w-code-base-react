import * as icons from "@assets/icons";
import CardIcon from "@components/cards/CardIcon";

const IconPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Icon</h4>
      <div className="flex flex-wrap gap-2 ">
        {
          Object?.entries(icons)?.map(([key, value]) => <div key={key}>
            <CardIcon Icon={value} name={key} />
          </div>)
        }
      </div>
    </div>
  );
};

export default IconPage;