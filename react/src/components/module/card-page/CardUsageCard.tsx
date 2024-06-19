
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsageCard = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of Card:</p>
      <CodeBlock codeString={generateDisplayComponent('Card', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = `return <Card 
        header={{image: "https://i.pinimg.com/736x/7f/55/23/7f55239c73e486e08f8779ed408d4abd.jpg"}}
        body={{
          title: "Card Title",
          subtitle: "CARD SUBTITLE",
          content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum recusandae, veritatis corporis doloremque accusamus sunt totam sed officia possimus? Tempora excepturi error dolores autem incidunt nihil ipsum dolore? Error!</p>
        }}
        customeClass={{container: "w-[20rem]"}}
      }
/>`;

export default CardUsageCard;
