
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Button from "@components/ui/Button";

const CardButtonIntro = () => {
  return (
    <CardIntroComponent
      title={'Button'}
      subTitle="Description of Button."
      listExample={[
        {
          title: "Color Variants",
          component: <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <Button variant={"solid-primary"} label={'Siska'} />
              <Button variant={"solid-warning"} label={'Siska'} />
              <Button variant={"solid-error"} label={'Siska'} />
              <Button variant={"solid-success"} label={'Siska'} />
              <Button variant={"solid-black"} label={'Siska'} />
              <Button variant={"solid-white"} label={'Siska'} />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant={"soft-primary"} label={'Siska'} />
              <Button variant={"soft-warning"} label={'Siska'} />
              <Button variant={"soft-error"} label={'Siska'} />
              <Button variant={"soft-success"} label={'Siska'} />
              <Button variant={"soft-black"} label={'Siska'} />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant={"outline-primary"} label={'Siska'} />
              <Button variant={"outline-warning"} label={'Siska'} />
              <Button variant={"outline-error"} label={'Siska'} />
              <Button variant={"outline-success"} label={'Siska'} />
              <Button variant={"outline-black"} label={'Siska'} />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant={"link-primary"} label={'Siska'} />
              <Button variant={"link-warning"} label={'Siska'} />
              <Button variant={"link-error"} label={'Siska'} />
              <Button variant={"link-success"} label={'Siska'} />
              <Button variant={"link-black"} label={'Siska'} />
            </div>
          </div>
        },
        {
          title: "Size",
          component: <div className="flex gap-4">
            <Button variant={"solid-primary"} label={'Small'} size={"small"} />
            <Button variant={"solid-primary"} label={'Base'} size={"base"} />
            <Button variant={"solid-primary"} label={'Medium'} size={"medium"} />
            <Button variant={"solid-primary"} label={'Large'} size={"large"} />
          </div>
        },
        {
          title: "Shape",
          component: <div className="flex gap-4">
            <Button variant={"solid-primary"} label={'Rounded'} shape={"rounded"} />
            <Button variant={"solid-primary"} label={'Circle'} shape={"circle"} />
          </div>
        },
        {
          title: "Disabled",
          component: <div className="flex items-center gap-4">
            <Button variant={"solid-primary"} label={'Rounded'} disabled />
            <Button variant={"outline-primary"} label={'Rounded'} disabled />
            <Button variant={"soft-primary"} label={'Rounded'} disabled />
            <Button variant={"link-primary"} label={'Rounded'} disabled />

          </div>
        }
      ]}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Button`;

export default CardButtonIntro;
