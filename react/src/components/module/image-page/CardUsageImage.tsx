import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import { generateDisplayComponent } from "@lib/utils/helper";

const CardUsageImage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Image (Access image from folder assets/images):</p>
      <CodeBlock codeString={generateDisplayComponent("Image", displayUsage)} />
    </CardSubMenu>
  );
};

const displayUsage = `
return <Image src={"c1.webp"} className="h-[10rem] w-[10rem] object-cover  " customeClassName={{ container: "" }} />`;

export default CardUsageImage;
