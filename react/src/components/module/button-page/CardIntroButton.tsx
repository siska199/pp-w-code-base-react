
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Button from "@components/ui/Button";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { variantButton } from "@lib/utils/variants/ui/variant-button";

const CardIntroButton = () => {
  const listExample = [
    {
      title: "Color",
      component: <CardVariousCompVariant<typeof variantButton>
        variant={variantButton}
        groups={["solid", "outline", "soft", "softborder"]}
        Component={(variant) => <Button variant={variant} label={'Siska'} />}
      />
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
      title: "State",
      component: <div className="flex items-center gap-4">
        <Button variant={"solid-primary"} label={'Loading'} isLoading />
        <Button variant={"solid-primary"} label={'Disabled'} disabled />
      </div>
    }
  ]
  return (
    <CardIntroComponent
      title={'Button'}
      subTitle={`The Button component is a foundational UI element essential for facilitating user interactions in web applications. It serves a dual purpose, capable of functioning either as a traditional button (<button> element) or as a styled link within the application's interface. The primary role of the Button component is to enable users to trigger actions, submit forms, or navigate through different parts of the application.`}
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Button}
    />
  );
}

export default CardIntroButton;
