import { IconVerified } from "@assets/icons";
import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Avatar from "@components/ui/Avatar";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import variantsAvatar from "@lib/utils/variants/ui/variant-avatar";

const CardIntroAvatar = () => {
  console.log(Object.keys(variantsAvatar.shape));
  const listExample = [
    {
      component: (
        <CardVariousCompVariant<typeof variantsAvatar.variant>
          variant={variantsAvatar.variant}
          groups={["solid", "outline", "soft"]}
          Component={(variant) => (
            <Avatar
              type="initial-name"
              variant={variant}
              name="Siska"
            />
          )}
        />
      ),
    },
    {
      title: "Size",
      component: (
        <CardVariousCompVariant<typeof variantsAvatar.size>
          variant={variantsAvatar.size}
          groups={Object.keys(variantsAvatar.size)}
          Component={(size) => (
            <Avatar
              type="initial-name"
              variant={"solid-primary"}
              size={size}
              name="Siska"
            />
          )}
        />
      ),
    },
    {
      title: "Shape",
      component: (
        <CardVariousCompVariant<typeof variantsAvatar.shape>
          variant={variantsAvatar.shape}
          groups={Object.keys(variantsAvatar.shape)}
          Component={(shape) => (
            <Avatar
              type="initial-name"
              variant={"solid-primary"}
              shape={shape}
              name="Siska"
            />
          )}
        />
      ),
    },
    {
      title: "Status",
      component: (
        <CardVariousCompVariant<typeof variantsAvatar.status>
          variant={variantsAvatar.status}
          groups={Object.keys(variantsAvatar.status)}
          Component={(status) => {
            return (
              <Avatar
                type="image"
                src={"https://i.pinimg.com/564x/d6/b0/b6/d6b0b67ba61773c5f163111ede88740a.jpg"}
                customeIcon={status === "icon" ? <IconVerified className="w-[1rem] h-[1rem]" /> : undefined}
                status={status}
                name="Siska"
              />
            );
          }}
        />
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Avatar"}
      subTitle="The Avatar component is commonly used in website development to visually represent users, especially in social interactions such as forums, social media, or community-based applications. It is a small image that represents a user or another entity."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Avatar}
    />
  );
};

export default CardIntroAvatar;
