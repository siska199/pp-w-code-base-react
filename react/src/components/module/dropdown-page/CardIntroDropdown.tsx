
import { IconDownload, IconLogout, IconNotification, IconReceipt, IconSetting, IconUsers } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Badge from "@components/ui/Badge";
import Image from "@components/ui/Image";
import DropdownBase from "@components/ui/dropdown/DropdownBase";
import { TOption } from "@types";

const CardIntroDropdown = () => {
  const listOption = [
    {
      label: "Siska 1", value: "Siska"
    },
    {
      label: "Siska 2", value: "Siska"
    },
    {
      label: "Siska 3", value: "Siska"
    }
  ]

  const listOptionDivider = [
    {
      label: <> Newsletter <Badge label={2} size={"small"} variant={"solid-primary"} shape={"circle"} /></>,
      value: "Siska",
      className: "justify-between"
    },
    {
      label: "Purchase",
      value: "Siska"
    },
    {
      label: <>Download <Badge size={"small"} label={2} variant={"solid-white"} shape={"circle"} /></>,
      value: "Siska",
      className: "justify-between"
    },
    {
      label: "Team Account",
      className: "border-b py-3",
      value: "Siska"
    },
    {
      label: <>Upgrade License <Badge size={"small"} label="Pro" variant={"soft-primary"} /> </>,
      className: "border-b py-3",
      value: "Siska"
    },
    {
      label: <><IconSetting />Account Settings</>,
      value: "Siska"
    },
    {
      label: <><IconLogout />Sign Out</>,
      value: "Siska",
      className: "text-error"
    }
  ]

  const listOptionTitle = [
    {
      title: 'Setting',
      label: <><IconNotification /> Newsletter</>,
      value: "Siska",
    },
    {
      label: <><IconReceipt />Purchase</>,
      value: "Siska"
    },
    {
      label: <><IconDownload /> Download</>,
      value: "Siska",
      className: ""
    },
    {
      label: <><IconUsers />Team Account</>,
      value: "Siska",
      className: "border-b"
    },

    {
      title: "Contact",
      label: <>Contact Support</>,
      value: "Siska",
      className: ""
    }
  ]


  const handleOnClick = (data: TOption) => {
    console.log("name: ", data)
  }

  const listExample = [
    {
      component: <div className="flex flex-col gap-4">

        <CardVariantComp
          title={"Default"}
          withBorder={false}
          Component={<DropdownBase
            label={"Action"}
            options={listOption}
            onClick={handleOnClick}
          />}
        />
        <CardVariantComp
          title={"Dividers"}
          withBorder={false}
          Component={<DropdownBase
            label={"Action"}
            options={listOptionDivider}
            onClick={handleOnClick}
          />}
        />

        <CardVariantComp
          title={"Title"}
          withBorder={false}
          Component={<DropdownBase
            label={"Action"}
            options={listOptionTitle}
            onClick={handleOnClick}
          />}
        />

        <CardVariantComp
          title={"Header"}
          withBorder={false}
          Component={<DropdownBase
            label={"Action"}
            options={listOption}
            onClick={handleOnClick}
            header={<div className="flex gap-2 items-center ">
              <Image className="rounded-full w-[2rem] h-[2rem] border border-gray-300" src={"avatar.svg"} />
              <div className="flex flex-col">
                <p className="">Sign in as</p>
                <p className="text-black">James site</p>
              </div>
            </div>}
          />}
        />

      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Dropdown'}
      subTitle="Description of Dropdown."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Dropdown`;

export default CardIntroDropdown;
