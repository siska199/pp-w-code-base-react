import { IconMessage } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputBase from "@components/ui/inputs/InputBase";
import useForm from "@hooks/useForm";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputBase = () => {
  type TKey = "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5" | "variant-6" | "disabled" | "error" | "icon-left" | "icon-right" | "icon-pre-start" | "icon-pre-end";

  const { form, handleOnChange } = useForm<TKey>({
    initialForm: {
      "variant-1": {
        label: "Variant 1",
        placeholder: "Variant 1",
        variant: "v1",
        value: "",
      },
      "variant-2": {
        label: "Variant 2",
        placeholder: "Variant 2",
        variant: "v2",
        value: "",
      },
      "variant-3": {
        label: "Variant 3",
        placeholder: "Variant 3",
        variant: "v3",
        value: "",
      },
      "variant-4": {
        label: "Variant 4",
        placeholder: "Variant 4",
        variant: "v4",
        value: "",
      },
      "variant-5": {
        label: "Variant 5",
        placeholder: "Variant 5",
        variant: "v5",
        value: "",
      },
      "variant-6": {
        label: "Variant 6",
        placeholder: "Variant 6",
        variant: "v6",
        value: "",
      },
      disabled: {
        label: "Disabled",
        placeholder: "Disabled",
        variant: "v1",
        disabled: true,
        value: "",
      },
      error: {
        label: "Error",
        placeholder: "Error",
        variant: "v1",
        errorMessage: "Invalid Input",
        value: "",
      },
      "icon-left": {
        label: "Icon Left",
        variant: "v1",
        customeElement: {
          start: <IconMessage />,
        },
        name: "variant-1",
        value: "",
      },
      "icon-right": {
        label: "Icon right",
        variant: "v1",
        customeElement: {
          end: <IconMessage />,
        },
        value: "",
      },
      "icon-pre-start": {
        label: "Pre End",
        variant: "v1",
        customeElement: {
          preStart: "Http",
        },
        value: "",
      },
      "icon-pre-end": {
        label: "Pre End",
        customeElement: {
          preEnd: "Text Preend",
        },
        value: "",
      },
    },
  });

  const listExample1 = [
    {
      title: "Variant 1",
      props: form["variant-1"],
    },
    {
      title: "Variant 2",
      props: form["variant-2"],
    },
    {
      title: "Variant 3",
      props: form["variant-3"],
    },
    {
      title: "Variant 4",
      props: form["variant-4"],
    },
    {
      title: "Variant 5",
      props: form["variant-5"],
    },
    {
      title: "Variant 6",
      props: form["variant-6"],
    },
  ];

  const listExample2 = [
    {
      title: "Disabled",
      props: form["disabled"],
    },
    {
      title: "Error",
      props: form["error"],
    },
  ];

  const listExample3 = [
    {
      title: "Icon left",
      props: form["icon-left"],
    },
    {
      title: "Icon Right",
      props: form["icon-right"],
    },
    {
      title: "Pre Start",
      props: form["icon-pre-start"],
    },
    {
      title: "Pre End",
      props: form["icon-pre-end"],
    },
  ];

  const listExample = [
    {
      title: "Variant",
      component: listExample1?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full",
          }}
          Component={<InputBase onChange={handleOnChange} {...data?.props} />}
        />
      )),
    },
    {
      title: "State",
      component: listExample2?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full",
          }}
          Component={<InputBase onChange={handleOnChange} {...data?.props} />}
        />
      )),
    },
    {
      title: "With Icon",
      component: listExample3?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full",
          }}
          Component={<InputBase onChange={handleOnChange} {...data?.props} />}
        />
      )),
    },
  ];

  return (
    <CardIntroComponent
      title={"Input Base"}
      subTitle="An Input component is a UI element that allows users to enter and interact with data in web or mobile applications. It comes in various forms such as text fields, checkboxes, radio buttons, and dropdowns, each designed for specific types of data input. Properly designed Input components enhance user experience by making data entry intuitive and efficient."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputBase}
    />
  );
};

export default CardIntroInputBase;
