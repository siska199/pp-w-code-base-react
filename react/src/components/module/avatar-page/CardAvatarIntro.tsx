
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";

const CardAvatarIntro = () => {
  return (
    <CardIntroComponent
      title={'Avatar'}
      subTitle="Description of Avatar."
      DisplayComponent={<Avatar />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Avatar`;

export default CardAvatarIntro;
