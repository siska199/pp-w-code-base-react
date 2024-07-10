import { IconDownload, IconLogout, IconNotification, IconReceipt, IconSetting, IconUsers } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Badge from "@components/ui/Badge";
import Image from "@components/ui/Image";
import DropdownBase, { TOptionDropdown } from "@components/ui/dropdown/DropdownBase";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroDropdown = () => {
  const listOption = [
    {
      label: "Newsletter",
      value: "Siska",
    },
    {
      label: "Purchase",
      value: "Siska",
    },
    {
      label: "Downloads",
      value: "Siska",
    },
    {
      label: "Team Account",
      value: "Siska",
    },
  ];

  const listOptionDivider = [
    {
      label: (
        <>
          {" "}
          Newsletter <Badge label={2} size={"small"} variant={"solid-primary"} shape={"circle"} />
        </>
      ),
      value: "Siska",
      className: "justify-between",
    },
    {
      label: "Purchase",
      value: "Siska",
    },
    {
      label: (
        <>
          Download <Badge size={"small"} label={2} variant={"solid-white"} shape={"circle"} />
        </>
      ),
      value: "Siska",
      className: "justify-between",
    },
    {
      label: "Team Account",
      className: "border-b py-3",
      value: "Siska",
    },
    {
      label: (
        <>
          Upgrade License <Badge size={"small"} label="Pro" variant={"soft-primary"} />{" "}
        </>
      ),
      className: "border-b py-3",
      value: "Siska",
    },
    {
      label: (
        <>
          <IconSetting />
          Account Settings
        </>
      ),
      value: "Siska",
    },
    {
      label: (
        <>
          <IconLogout />
          Sign Out
        </>
      ),
      value: "Siska",
      className: "text-error",
    },
  ];

  const listOptionTitle = [
    {
      title: "Setting",
      label: (
        <>
          <IconNotification /> Newsletter
        </>
      ),
      value: "Siska",
    },
    {
      label: (
        <>
          <IconReceipt />
          Purchase
        </>
      ),
      value: "Siska",
    },
    {
      label: (
        <>
          <IconDownload /> Download
        </>
      ),
      value: "Siska",
      className: "",
    },
    {
      label: (
        <>
          <IconUsers />
          Team Account
        </>
      ),
      value: "Siska",
      className: "border-b",
    },

    {
      title: "Contact",
      label: <>Contact Support</>,
      value: "Siska",
      className: "",
    },
  ];

  const handleOnClick = (data: TOptionDropdown) => {
    console.log("name: ", data);
  };

  const listExample = [
    {
      component: (
        <div className="flex flex-col gap-4">
          <CardVariantComp title={"Default"} withBorder={false} Component={<DropdownBase label={"Action"} options={listOption} onClick={handleOnClick} />} />
          <CardVariantComp title={"Dividers"} withBorder={false} Component={<DropdownBase label={"Action"} options={listOptionDivider} onClick={handleOnClick} />} />
          <CardVariantComp title={"Title"} withBorder={false} Component={<DropdownBase label={"Action"} options={listOptionTitle} onClick={handleOnClick} />} />
          <CardVariantComp
            title={"Header"}
            withBorder={false}
            Component={
              <DropdownBase
                label={"Action"}
                options={listOption}
                onClick={handleOnClick}
                header={
                  <div className="flex gap-2 items-center w-full ">
                    <Image className=" rounded-full w-[2rem] h-[2rem]  border-gray-300" src={"https://i.pinimg.com/564x/d6/b0/b6/d6b0b67ba61773c5f163111ede88740a.jpg"} />
                    <div className="flex flex-col flex-grow ">
                      <p className="">Sign in as</p>
                      <p className="text-black">James site</p>
                    </div>
                  </div>
                }
              />
            }
          />

          <CardVariantComp
            title={"Button Trigger"}
            withBorder={false}
            Component={<DropdownBase withButtonTriger={true} isDefaultStyle={false} options={listOption} onClick={handleOnClick} />}
            customeClass={{
              container: "",
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Dropdown"}
      subTitle="A Dropdown is a user interface component that allows users to select one option from a list that appears when they click or hover over the element. Dropdowns are widely used in web and mobile applications to provide a compact and efficient way for users to choose from a set of options without cluttering the user interface."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.DropdownBase}
    />
  );
};

export default CardIntroDropdown;
