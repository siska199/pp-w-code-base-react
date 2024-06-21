import * as icons from "@assets/icons";
import CardIcon from "@components/cards/CardIcon";

const IconPage = () => {


  return (
    <div className="flex flex-wrap gap-2">
      {
        Object?.entries(icons)?.map(([key, value]) => <div key={key}>
          <CardIcon  Icon={value} />
          {JSON.stringify(value)}
        </div>)
      }
    </div>
  );
};

export default IconPage;