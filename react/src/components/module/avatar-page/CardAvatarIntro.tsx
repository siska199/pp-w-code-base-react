
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";

const CardAvatarIntro = () => {
  return (
    <CardIntroComponent
      title={'Avatar'}
      subTitle="Description of Avatar."
      DisplayComponent={<DisplayAvatar />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const DisplayAvatar = () => {
  return <div className="flex gap-4 flex-wrap mx-auto">
    <Avatar type="alphabet" variant={"soft-primary"} name="Siska" />
    <Avatar type="alphabet" variant={"soft-warning"} name="Siska" />
    <Avatar type="alphabet" variant={"soft-success"} name="Siska" />


  </div>
}

const displayCodeBase = `// Code for Avatar`;

export default CardAvatarIntro;
