import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageAvatar = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Avatar:</p>
      <CodeBlock codeString={generateDisplayComponent("Avatar", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `<Avatar type="image" src={"https://i.pinimg.com/564x/bb/32/50/bb325038c19d2f020d498487964cfc2e.jpg"} status={"icon"} customeIcon={<IconVerified />} name="Siska" />`;

export default CardUsageAvatar;
