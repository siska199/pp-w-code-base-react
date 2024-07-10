import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsOTP = () => {
  const listItem = [
    {
      label: "name",
      content: "Identifies the OTP input field.",
    },
    {
      label: "onChange",
      content: "Callback function triggered on OTP change, receiving an event with validation information.",
    },
    {
      label: "numberOfDigits",
      content: "Specifies the total number of OTP digits expected.",
    },
    {
      label: "correctOTP",
      content: "The correct OTP value against which user input is validated.",
    },
    {
      label: "message",
      content: "An optional object containing `error` and `success` messages to display corresponding feedback based on the OTP validation.",
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsOTP;
