import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputOTP from "@components/ui/inputs/InputOTP";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import { TEventOnChange } from "@types";
import { useState } from "react";

const CardIntroOTP = () => {
  const [form, setForm] = useState({
    "input-otp": {
      label: "Input OTP",
      value: false,
      name: "input-otp",
    },
  });

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as keyof typeof form;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: {
        ...form[name],
        value,
      },
    });
  };

  const listExample = [
    {
      component: (
        <CardVariantComp
          title={"default "}
          withBorder={false}
          Component={
            <div className="w-full flex flex-col gap-4">
              <InputOTP onChange={handleOnChange} {...form["input-otp"]} numberOfDigits={4} correctOTP="1234" />
            </div>
          }
        />
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"OTP"}
      subTitle="This component is a React component called InputOTP, designed to handle OTP (One-Time Password) input functionality. Here’s a breakdown of its key features and functionality:"
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputOTP}
    />
  );
};

export default CardIntroOTP;
