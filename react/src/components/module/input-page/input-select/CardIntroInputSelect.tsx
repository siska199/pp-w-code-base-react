import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputSelect from "@components/ui/inputs/InputSelect";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { TOption } from "@types";
import { useState } from "react";

const CardIntroInputSelect = () => {
  const { form, handleOnChange } = useForm<"input-select" | "input-select-multiple" | "input-select--select-all">({
    initialForm: {
      "input-select": {
        value: "",
      },
      "input-select-multiple": {
        value: [],
      },
      "input-select--select-all": {
        value: [],
      },
    },
  });

  const [options] = useState<{ [key: string]: TOption[] }>({
    listInputSelect: [
      { label: "Alice Johnson", value: "alice-johnson" },
      { label: "Bob Smith", value: "bob-smith" },
      { label: "Charlie Brown", value: "charlie-brown" },
      { label: "David Williams", value: "david-williams" },
      { label: "Eva Green", value: "eva-green" },
      { label: "Frank Miller", value: "frank-miller" },
      { label: "Grace Lee", value: "grace-lee" },
      { label: "Hannah Wilson", value: "hannah-wilson" },
      { label: "Ian Thomas", value: "ian-thomas" },
      { label: "Jack Davis", value: "jack-davis" },
      { label: "Katie Martinez", value: "katie-martinez" },
      { label: "Liam White", value: "liam-white" },
      { label: "Mia Harris", value: "mia-harris" },
      { label: "Noah Clark", value: "noah-clark" },
      { label: "Olivia Lewis", value: "olivia-lewis" },
      { label: "Paul Walker", value: "paul-walker" },
      { label: "Quinn Scott", value: "quinn-scott" },
      { label: "Rachel King", value: "rachel-king" },
      { label: "Sam Taylor", value: "sam-taylor" },
      { label: "Tina Moore", value: "tina-moore" },
    ],
  });

  const handleOnLoadMore = async () => {
    try {
      console.log("onLoad more");
    } catch (error: unknown) {
      if (error instanceof Error) return error.message;
    }
  };

  const listExample = [
    {
      component: <CardVariantComp title={"default "} withBorder={false} Component={<InputSelect onChange={handleOnChange} {...form["input-select"]} options={options?.listInputSelect} />} />,
    },
    {
      component: <CardVariantComp title={"Multiple Select"} withBorder={false} Component={<InputSelect onChange={handleOnChange} {...form["input-select-multiple"]} options={options?.listInputSelect} isMultiple />} />,
    },
    {
      component: <CardVariantComp title={"Multiple Select (With Select All)"} withBorder={false} Component={<InputSelect onChange={handleOnChange} {...form["input-select--select-all"]} options={options?.listInputSelect} isMultiple withSelectAll onLoadMore={handleOnLoadMore} />} />,
    },
  ];

  return (
    <CardIntroComponent
      title={"Input Select"}
      subTitle="The InputSelect component is a user interface element commonly used in web development. It presents users with a dropdown list of selectable options, allowing them to choose one option at a time. Developers configure it with props such as options, value, and onChange to control its behavior and appearance within their applications."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputSelect}
      customeClass={{
        tab: {
          container:"!overflow-visible"
        }
      }}
    />
  );
};

export default CardIntroInputSelect;
