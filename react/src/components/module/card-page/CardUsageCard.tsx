import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageCard = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Card:</p>
      <CodeBlock codeString={generateDisplayComponent("Card", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage =
  'return <Card \n        header={{image: "https://i.pinimg.com/736x/7f/55/23/7f55239c73e486e08f8779ed408d4abd.jpg"}}\n        body={{\n          title: "Card Title",\n          subtitle: "CARD SUBTITLE",\n          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>\n        }}\n        customeClass={{container: "w-[20rem]"}}\n      }\n/>';

export default CardUsageCard;
