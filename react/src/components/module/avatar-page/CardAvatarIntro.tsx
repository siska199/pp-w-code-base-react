
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";

const CardAvatarIntro = () => {
  const listExample = [
    {
      title: '',
      component: <div className="flex gap-4 items-center">
        <Avatar type="alphabet" sizeAvatar={"tiny"} name="Siska" />
        <Avatar type="alphabet" variant={"soft-warning"} name="Siska" />
        <Avatar type="alphabet" variant={"solid-primary"} name="Siska" />
        <Avatar type="alphabet" variant={"soft-success"} sizeAvatar={"large"} name="Siska" />
      </div>
    },
    {
      title: '',
      component: <div className="flex gap-4 items-center">
        <Avatar type="image" sizeAvatar={"tiny"} name="Siska" status={"online"} />
        <Avatar type="image" name="Siska" status={"dont-distrub"} />
        <Avatar type="alphabet" variant={"solid-white"} shapeAvatar={"rounded"} name="Siska" status={"offline"} />
        <Avatar type="image" src={"https://i.pinimg.com/564x/bb/32/50/bb325038c19d2f020d498487964cfc2e.jpg"} variant={"solid-black"} sizeAvatar={"large"} name="Siska" status={"away"} />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Avatar'}
      subTitle="Description of Avatar."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Avatar`;

export default CardAvatarIntro;
